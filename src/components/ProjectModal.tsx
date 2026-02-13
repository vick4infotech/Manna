import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Project } from '../data/projects';
import Modal from './Modal';

export default function ProjectModal({
  open,
  onClose,
  project
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  const [index, setIndex] = useState(0);

  const images = useMemo(() => project?.images ?? [], [project]);

  if (!project) return null;

  const img = images[index];

  return (
    <Modal open={open} onClose={() => { setIndex(0); onClose(); }} title={project.title} maxWidthClass="max-w-4xl">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>

          {images.length > 1 ? (
            <div className="flex items-center justify-between">
              <button
                className="btn-ghost"
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              >
                <ChevronLeft size={18} /> Prev
              </button>
              <p className="text-sm text-slate-400">
                {index + 1} / {images.length}
              </p>
              <button
                className="btn-ghost"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          ) : null}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge gap-2"><Tag size={14} /> {project.category}</span>
            <span className="badge">Role: {project.role}</span>
          </div>

          <p className="mt-4 text-slate-300">{project.short}</p>

          <div className="mt-5">
            <p className="text-sm font-semibold">Responsibilities</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {project.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold">Outcomes / Impact</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {project.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
