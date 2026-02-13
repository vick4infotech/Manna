export type TimelineItem = { year: string; title: string; detail: string };

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <div key={`${it.year}-${it.title}`} className="card p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="font-semibold">{it.title}</p>
            <p className="text-sm text-slate-400">{it.year}</p>
          </div>
          <p className="mt-2 text-sm text-slate-300">{it.detail}</p>
        </div>
      ))}
    </div>
  );
}
