// Contact-form spam classification.
//
// Built by measuring, not guessing: every rule below was checked against the
// 104 real submissions stored in D1 over the week of 2026-07-25..08-01, of
// which 26 were spam. Weights are set so that no single low-confidence signal
// can quarantine an enquiry on its own — a lost lead costs far more than a
// spam email that gets through, so the bar for a *sufficient* signal is
// "matched all 26 spam rows and none of the 78 genuine ones".
//
// Nothing here rejects a submission. Anything scoring at or above THRESHOLD is
// stored in D1 with its score and reasons, and simply not emailed — so a
// misclassification is recoverable from the database rather than lost, and the
// sender still sees success (a bot that gets an error tries something else).

/** A matched signal and what it contributes to the score. */
export interface SpamSignal {
  code: string;
  weight: number;
  detail?: string;
}

export interface SpamVerdict {
  score: number;
  spam: boolean;
  signals: SpamSignal[];
  /** Compact, loggable/storable summary, e.g. "bot-name-suffix+4, name-echo+2". */
  reason: string;
}

/** Score at which an enquiry is quarantined rather than emailed. Set so that
 *  exactly one high-confidence signal is enough, and any number of merely
 *  suspicious ones (weight 2) needs corroboration. */
export const SPAM_THRESHOLD = 4;

// Fields are optional because this guards an endpoint and must never throw on
// a partial payload. It's also what zod infers here: the app compiles with
// strictNullChecks off, which makes every key of a z.object() output optional,
// so requiring them would not typecheck against the parsed form data anyway.
export interface SpamInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

export interface SpamContext {
  /** Value of the Origin header, if the client sent one. */
  origin?: string | null;
  /** Host the request was made to, for comparison against Origin. */
  host?: string | null;
  /** An identical (email, message) pair is already stored. */
  duplicate?: boolean;
  /** This sender has exceeded the per-IP submission rate. */
  rateLimited?: boolean;
  /** Turnstile is configured and the submission had no valid token. Only set
   *  for a definite verdict — never when Cloudflare was unreachable, which
   *  says nothing about the sender. */
  turnstileFailed?: boolean;
}

// Free mailbox providers. Deliberately NOT a signal by itself: 41 of the 104
// stored submissions came from gmail.com and most were genuine — small
// operators and solo founders legitimately use free mail. It only qualifies
// the "claims to be a famous company" rule below.
const FREEMAIL = new Set([
  "gmail.com", "googlemail.com", "hotmail.com", "hotmail.co.uk", "outlook.com",
  "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "aol.com", "icloud.com",
  "me.com", "mail.ru", "yandex.ru", "yandex.com", "proton.me", "protonmail.com",
  "web.de", "gmx.de", "gmx.net", "gmx.com", "qq.com", "163.com", "inbox.lv",
  "rediffmail.com", "zoho.com", "tutanota.com", "mailinator.com",
]);

// Companies the spam runs claim to be. Every one of the 25 bot submissions put
// "google" here. Weighted low on its own because someone genuinely at Google
// would type exactly this, and Google does ship travel products.
const BARE_BRANDS = new Set([
  "google", "facebook", "meta", "microsoft", "apple", "amazon", "netflix",
  "tiktok", "twitter", "x", "yandex", "booking", "booking.com", "airbnb",
]);

// "I wanted to know your price", machine-translated. The observed run cycled
// through Welsh, Zulu, Icelandic, Greek, Latin, Belarusian, Danish, Georgian,
// Bengali, Vietnamese, Lithuanian, Azerbaijani, Afrikaans, Croatian and
// Luxembourgish. Contributory only (+2): a genuine short "what is your price?"
// in Spanish or Portuguese looks the same, and must not be quarantined for it.
const PRICE_WORDS =
  /\b(price|pris|prijs|preis|präis|prys|precio|preço|prezzo|pretium|prix|kaina|cijenu|cenu|ceno|qiym[əe]tinizi|verð|hinta|pre[țt]ul|árat|cijena|intengo|bei|farashin)\b|price|цена|цену|прайс|ціну|価格|价格|가격|ราคา|ფასი|মূল্য|फ़ीमत|قيمة|سعر|giá/i;

const GREETING =
  /^\s*(hi|hey|hello|hallo|hej|h[æa]|salut|salam|sveiki|zdravo|ciao|ol[áa]|hola|bonjour|guten tag|xin ch[àa]o|sawubona|γεια|привет|прывітанне|здравствуйте|こんにちは|안녕|สวัสดี|გამარჯობა|হাই|مرحبا|namaste)\b/i;

const URL_RE = /\b(?:https?:\/\/|www\.)\S+/i;
const CYRILLIC = /[Ѐ-ӿ]/;

/** Trailing two capitals after a lowercase letter: "…DrathGM", "…gausaGW",
 *  "…dreftXO", "…NoxUC". This matched all 25 bot submissions and none of the
 *  78 genuine ones. Kept to exactly two capitals — the shape the run actually
 *  produces — because widening it starts catching real all-caps surnames
 *  (HILALI and PORDEL are both real leads in the same dataset). */
const BOT_NAME_SUFFIX = /[a-z][A-Z]{2}$/;

const domainOf = (email: string) => email.split("@")[1]?.trim().toLowerCase() ?? "";

/** How many times the string switches between lower- and upper-case. Random
 *  identifiers flip constantly; words and sentences barely do. */
function caseFlips(value: string): number {
  let flips = 0;
  for (let i = 1; i < value.length; i++) {
    const a = value[i - 1];
    const b = value[i];
    const aUpper = a >= "A" && a <= "Z";
    const bUpper = b >= "A" && b <= "Z";
    const aLower = a >= "a" && a <= "z";
    const bLower = b >= "a" && b <= "z";
    if ((aUpper && bLower) || (aLower && bUpper)) flips++;
  }
  return flips;
}

/** Normalises a company name to a bare token for brand comparison:
 *  "Google Inc." and " GOOGLE " both become "google". */
const companyToken = (company: string) =>
  company.trim().toLowerCase().replace(/[.,]/g, "").replace(/\s+(inc|llc|ltd|gmbh|bv|sa|sas|srl)$/, "").trim();

/** Do the two name fields echo each other? The run pairs a first name with a
 *  last name built from the same stem plus a suffix ("RobertDrath" +
 *  "JackDrathGM", "Barrygausa" + "BarrygausaGW"). Single tokens only, so
 *  ordinary two-part names can't trip it. */
function namesEcho(firstName: string, lastName: string): boolean {
  const first = firstName.trim();
  const last = lastName.trim();
  if (/\s/.test(first) || /\s/.test(last)) return false;
  if (first.length < 5 || last.length < 5) return false;
  const stem = last.replace(BOT_NAME_SUFFIX, (m) => m[0]);
  if (stem.toLowerCase() === first.toLowerCase()) return true;
  if (stem.toLowerCase().startsWith(first.toLowerCase())) return true;
  // Shared surname stem, e.g. "RobertDrath" / "JackDrath" both end "Drath".
  const tail = first.slice(-4).toLowerCase();
  return tail.length === 4 && stem.toLowerCase().endsWith(tail);
}

export function classifySpam(input: SpamInput, ctx: SpamContext = {}): SpamVerdict {
  const signals: SpamSignal[] = [];
  const add = (code: string, weight: number, detail?: string) =>
    signals.push({ code, weight, detail });

  const message = (input.message ?? "").trim();
  const firstName = (input.firstName ?? "").trim();
  const lastName = (input.lastName ?? "").trim();
  const email = input.email ?? "";
  const company = input.company ?? "";

  // --- Sufficient on their own (weight >= THRESHOLD) --------------------
  if (BOT_NAME_SUFFIX.test(lastName)) {
    add("bot-name-suffix", 4, lastName);
  }

  // A single long token that keeps flipping case is a random string, not prose:
  // the one submission like this had values such as "WrtrMzpbOkjkACCuhg" in
  // every field. Both conditions matter — "Integration?" and a bare pasted URL
  // are also whitespace-free, and are perfectly good terse enquiries, so the
  // case-flip count is what separates gibberish from a real short message.
  if (message.length >= 14 && !/\s/.test(message) && caseFlips(message) >= 5) {
    add("opaque-message", 4, message.slice(0, 24));
  }

  // A browser posting our own form sends its own origin, and the form's action
  // is relative, so for a real submission the two always agree. A mismatch
  // means the post was made from somewhere else. Absent Origin is NOT penalised
  // — plenty of legitimate clients omit it. "www." is normalised away so that
  // introducing an apex/www redirect later can't start quarantining real leads.
  if (ctx.origin && ctx.host) {
    const bare = (h: string) => h.toLowerCase().replace(/^www\./, "");
    try {
      if (bare(new URL(ctx.origin).host) !== bare(ctx.host)) {
        add("foreign-origin", 4, ctx.origin);
      }
    } catch {
      add("foreign-origin", 4, "unparseable");
    }
  }

  if (ctx.rateLimited) add("rate-limited", 4);

  // No valid Turnstile token. A token can only be obtained by JS running on a
  // page we served, so this is precisely what a direct POST to the endpoint
  // cannot produce — the method the observed run relies on.
  if (ctx.turnstileFailed) add("turnstile-failed", 4);

  // --- Contributory only (need corroboration to reach THRESHOLD) --------
  if (namesEcho(firstName, lastName)) {
    add("name-echo", 2, `${firstName}/${lastName}`);
  }

  const token = companyToken(company);
  if (BARE_BRANDS.has(token) && FREEMAIL.has(domainOf(email))) {
    add("bare-brand-company", 2, token);
  }

  // Short, generic, machine-translated price probe.
  if (message.length <= 70 && GREETING.test(message) && PRICE_WORDS.test(message)) {
    add("price-probe", 2, message.slice(0, 40));
  }

  // Cyrillic body carrying links — the link-spam variant. A URL alone is not a
  // signal: genuine prospects routinely link their own product.
  if (CYRILLIC.test(message) && URL_RE.test(message)) {
    add("cyrillic-links", 2);
  }

  if (ctx.duplicate) add("duplicate", 3);

  const score = signals.reduce((sum, s) => sum + s.weight, 0);
  return {
    score,
    spam: score >= SPAM_THRESHOLD,
    signals,
    reason: signals.map((s) => `${s.code}+${s.weight}`).join(", "),
  };
}
