type BarItem = {
  label: string;
  value: number; // 0..100
  note?: string;
  tone?: 'teal' | 'sky' | 'violet' | 'amber' | 'emerald';
};

function toneClass(tone: BarItem['tone']) {
  switch (tone) {
    case 'sky':
      return 'from-sky-500 to-cyan-400';
    case 'violet':
      return 'from-violet-500 to-fuchsia-500';
    case 'amber':
      return 'from-amber-500 to-orange-500';
    case 'emerald':
      return 'from-emerald-500 to-teal-400';
    case 'teal':
    default:
      return 'from-teal-500 to-sky-400';
  }
}

export default function SkillBars({ items }: { items: BarItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold">{it.label}</p>
              {it.note ? <p className="mt-1 text-xs text-slate-400">{it.note}</p> : null}
            </div>
            <p className="text-sm font-semibold text-slate-200">{it.value}%</p>
          </div>

          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${toneClass(it.tone)}`}
              style={{ width: `${Math.max(0, Math.min(100, it.value))}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
