#!/usr/bin/env node
// Asserts the contact-form spam defence is present and wired up in a source
// tree. Read-only, no network: it is a check on the code about to ship, not on
// the deployed site (scripts/check-turnstile.mjs does that).
//
//   node scripts/check-spam-defence.mjs            # checks the current tree
//   node scripts/check-spam-defence.mjs <dir>      # checks another checkout
//
// Why this exists. On 2026-09-05 three PRs were opened against `main`, which
// had been sitting six weeks behind the branch that was actually serving
// channex.io. Their merge trees simply did not contain spam.server.ts at all,
// and merging one deployed that tree: the classifier, Turnstile and the daily
// digest vanished from production together and spam reached the sales inbox
// within hours. Every check was green, because nothing was checking.
//
// Run on pull requests, this fails on the MERGE RESULT — so a stale base shows
// up red on the PR, before the merge, rather than in the inbox afterwards.
//
// Each entry is a file that must exist and the wiring that must still be in
// it. These are deliberately about the *connections* between modules, not the
// rules themselves: the classifier's weights are expected to change, but
// contact.server.ts must never stop calling it.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? process.cwd();

const CHECKS = [
  {
    file: "app/lib/spam.server.ts",
    needs: [
      [/export function classifySpam/, "classifySpam is exported"],
      [/export const SPAM_THRESHOLD/, "the score threshold is defined"],
    ],
  },
  {
    file: "app/lib/turnstile.server.ts",
    needs: [
      [/export async function verifyTurnstile/, "verifyTurnstile is exported"],
      [/export function turnstileSiteKey/, "turnstileSiteKey is exported"],
    ],
  },
  {
    file: "app/lib/digest.server.ts",
    needs: [[/export async function sendQuarantineDigest/, "the digest is exported"]],
  },
  {
    file: "app/lib/contact.server.ts",
    needs: [
      [/classifySpam/, "the classifier is called"],
      [/verdict\.spam/, "the verdict actually gates the email"],
    ],
  },
  {
    file: "app/routes/contact.tsx",
    needs: [
      [/verifyTurnstile/, "the route verifies the Turnstile token"],
      [/turnstile,/, "the outcome is passed to submitEnquiry"],
    ],
  },
  {
    file: "app/root.tsx",
    needs: [[/turnstileSiteKey/, "the site key reaches the page via the root loader"]],
  },
  {
    file: "workers/app.ts",
    needs: [[/sendQuarantineDigest/, "the cron handler sends the digest"]],
  },
  {
    file: "wrangler.jsonc",
    needs: [[/"crons"\s*:\s*\[/, "a cron trigger is configured"]],
  },
];

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const OFF = "\x1b[0m";
const PASS = `${GREEN}PASS${OFF}`;
const FAIL = `${RED}FAIL${OFF}`;

let problems = 0;

console.log(`Spam defence check — ${root}`);
console.log("-".repeat(60));

for (const { file, needs } of CHECKS) {
  const path = join(root, file);
  if (!existsSync(path)) {
    problems++;
    console.log(`${FAIL}  ${file}`);
    console.log(`      missing entirely — this tree has no spam defence`);
    continue;
  }
  const source = readFileSync(path, "utf8");
  const missing = needs.filter(([re]) => !re.test(source));
  if (missing.length === 0) {
    console.log(`${PASS}  ${file}`);
  } else {
    problems += missing.length;
    console.log(`${FAIL}  ${file}`);
    for (const [, description] of missing) console.log(`      no longer true: ${description}`);
  }
}

console.log("-".repeat(60));

if (problems === 0) {
  console.log(`${PASS}  Classifier, Turnstile and the digest are all present and wired up.`);
} else {
  console.log(`${FAIL}  ${problems} broken link(s) in the spam defence.

If this fired on a pull request, the most likely cause is a STALE BASE: the
branch you are merging into predates this code, so the merge result silently
drops it. Rebase onto the current main rather than merging as-is.`);
}

process.exit(problems === 0 ? 0 : 1);
