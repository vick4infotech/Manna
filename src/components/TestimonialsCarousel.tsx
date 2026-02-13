import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

type Testimonial = {
  quote: string;
  by: string;
  title?: string;
};

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 7000);
    return () => window.clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-tealish-500">
            <Quote size={18} />
            <p className="text-sm font-semibold">Endorsements</p>
          </div>
          <p className="mt-3 text-lg leading-relaxed">“{current.quote}”</p>
          <p className="mt-3 text-sm text-slate-400">— {current.by}{current.title ? `, ${current.title}` : ''}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-10 rounded-full border border-white/10 transition ${i === index ? 'bg-tealish-600' : 'bg-white/5 hover:bg-white/10'}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
