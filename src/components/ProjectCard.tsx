import { ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

function categoryPill(category: string) {
  switch (category) {
    case 'Executive Support':
      return 'border-teal-500/25 bg-teal-500/10 text-teal-100';
    case 'Projects':
      return 'border-sky-500/25 bg-sky-500/10 text-sky-100';
    case 'Operations':
      return 'border-amber-500/25 bg-amber-500/10 text-amber-100';
    case 'Reporting':
      return 'border-violet-500/25 bg-violet-500/10 text-violet-100';
    case 'Planning':
      return 'border-emerald-500/25 bg-emerald-500/10 text-emerald-100';
    default:
      return '';
  }
}

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.images[0];
  return (
    <button
      onClick={onOpen}
      className="card card-hover text-left overflow-hidden"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={cover.src}
          alt={cover.alt}
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
          <span className={`badge ${categoryPill(project.category)}`}>{project.category}</span>
          <span className="inline-flex items-center gap-1 text-sm text-slate-200">
            View <ExternalLink size={14} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-lg font-semibold">{project.title}</p>
        <p className="mt-2 text-sm text-slate-300">{project.short}</p>
      </div>
    </button>
  );
}
