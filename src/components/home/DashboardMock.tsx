const bars = [40, 65, 30, 80, 55, 90, 45, 70, 35, 60];

export default function DashboardMock() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl shadow-black/10">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-taupe/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cta/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Voltivo // Ops Console
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 p-5">
          <div className="col-span-2 rounded-lg border border-border bg-surface-2 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Throughput
              </span>
              <span className="font-mono text-[11px] text-success">+12.4%</span>
            </div>
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent/20 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-lg border border-border bg-surface-2 p-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Uptime
              </span>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                99.98<span className="text-sm text-muted">%</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface-2 p-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Nodes
              </span>
              <p className="mt-2 text-2xl font-semibold text-foreground">248</p>
            </div>
          </div>

          <div className="col-span-3 rounded-lg border border-border bg-surface-2 p-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Live Telemetry
            </span>
            <div className="mt-3 space-y-2.5">
              {[
                { label: "PLC-CORE-01", status: "Active", pct: 92 },
                { label: "IOT-GATEWAY-04", status: "Active", pct: 78 },
                { label: "ELEC-PANEL-02", status: "Standby", pct: 34 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 font-mono text-[11px] text-foreground/80">
                    {row.label}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-3">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right font-mono text-[11px] text-muted">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
