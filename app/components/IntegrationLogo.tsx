// Renders a partner logo, or a deterministic monogram tile when we don't have
// one. Whether a logo exists is decided server-side (empty `logo` means none),
// so no request is made for a file we know is missing and nothing flashes a
// broken image before hydration.

const PALETTE = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
  "bg-indigo-100 text-indigo-700",
  "bg-teal-100 text-teal-700",
];

/** Stable per-name colour so a partner's tile looks the same on every visit. */
function paletteFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

function initials(name: string): string {
  const words = name.replace(/[^\p{L}\p{N} .]/gu, " ").trim().split(/[\s.]+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

interface Props {
  name: string;
  /** Logo URL, or null/empty when we have none — then a monogram is shown. */
  logo?: string | null;
  /** Tailwind size classes for the outer tile. */
  className?: string;
  /** Text size for the monogram. */
  textClassName?: string;
}

// The slot (`className`) is deliberately allowed to be wider than it is tall.
// Many partner logos are wordmarks at 4-5:1 — squeezed into a square that tall
// they render only a few pixels high and read as a smudge. A wide slot gives
// them room while `object-contain` still leaves square logos square, and the
// monogram stays a square inside the same slot so every row stays aligned.
export default function IntegrationLogo({ name, logo, className = "w-16 h-16", textClassName = "text-lg" }: Props) {
  return (
    <div className={`${className} flex flex-none items-center justify-center`}>
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <div
          aria-hidden="true"
          className={`${paletteFor(name)} ${textClassName} flex h-full aspect-square items-center justify-center rounded-lg font-semibold tracking-tight`}
        >
          {initials(name)}
        </div>
      )}
    </div>
  );
}
