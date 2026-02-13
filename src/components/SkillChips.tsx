import { useMemo, useState } from 'react';

export default function SkillChips({ items }: { items: readonly string[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((x) => x.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-300">Tap a chip to copy it.</p>
        <input
          className="input sm:w-72"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills..."
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filtered.map((s) => (
          <button
            key={s}
            className="badge hover:bg-white/10"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(s);
              } catch {
                /* ignore */
              }
            }}
            title="Click to copy"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
