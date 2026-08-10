export default function Kicker({ children }: { children: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {children}
      </span>
    </div>
  );
}
