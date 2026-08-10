import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong bg-surface-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill="currentColor"
            className="text-cta"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold leading-tight tracking-tight text-foreground">
        Voltivo
        <span className="block text-xs font-medium tracking-[0.2em] text-muted">
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}
