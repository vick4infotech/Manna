import { Search } from 'lucide-react';

export default function SearchAndFilter({
  query,
  setQuery,
  categories,
  activeCategory,
  setActiveCategory
}: {
  query: string;
  setQuery: (v: string) => void;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (v: string) => void;
}) {
  return (
    <div className="card p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="input pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === activeCategory;
            return (
              <button
                key={c}
                className={`badge transition ${active ? 'bg-tealish-600/20 border-tealish-600/40 text-tealish-500' : 'hover:bg-white/10'}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
