import { ArrowRight, Mail } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Page from '../components/Page';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SearchAndFilter from '../components/SearchAndFilter';
import { useContact } from '../components/ContactProvider';
import { projectCategories, projects, Project } from '../data/projects';

export default function Projects() {
  const { openContact } = useContact();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const inCategory = activeCategory === 'All' || p.category === activeCategory;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.tools.join(' ').toLowerCase().includes(q) ||
        p.responsibilities.join(' ').toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, activeCategory]);

  return (
    <Page>
      <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="badge w-fit">Projects</p>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Work samples & systems I manage</h1>
          <p className="mt-2 max-w-3xl text-slate-300">
            These projects showcase real tools and workflows I use for executive support, reporting, planning, and project coordination.
          </p>
        </div>
        <button className="btn-primary" onClick={openContact}>
          Contact <Mail size={18} />
        </button>
      </section>

      <AnimatedSection className="mt-10">
        <SearchAndFilter
          query={query}
          setQuery={setQuery}
          categories={projectCategories as string[]}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </AnimatedSection>

      <AnimatedSection className="mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 card p-8 text-center">
            <p className="text-lg font-semibold">No results</p>
            <p className="mt-2 text-slate-300">Try clearing the search or selecting a different category.</p>
            <div className="mt-5 flex justify-center gap-3">
              <button className="btn-ghost" onClick={() => setQuery('')}>Clear search</button>
              <button className="btn-ghost" onClick={() => setActiveCategory('All')}>Show all</button>
            </div>
          </div>
        ) : null}
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <div className="card p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-extrabold">Let’s work together</p>
              <p className="mt-2 text-slate-300">
                If you need scheduling, documentation, reporting cycles, or project trackers that keep teams aligned — I can help.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary" onClick={openContact}>
                Get in touch <Mail size={18} />
              </button>
              <a className="btn-ghost" href="/cv.pdf" download>
                Download CV <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ProjectModal open={!!selected} project={selected} onClose={() => setSelected(null)} />
    </Page>
  );
}
