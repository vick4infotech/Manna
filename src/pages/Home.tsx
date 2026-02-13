import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Page from '../components/Page';
import ProjectCard from '../components/ProjectCard';
import SkillChips from '../components/SkillChips';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Timeline from '../components/Timeline';
import { profile } from '../data/profile';
import { highlights } from '../data/experience';
import { projects } from '../data/projects';
import { useContact } from '../components/ContactProvider';

const testimonials = [
  {
    quote:
      'Highly reliable and proactive — consistently turns meetings into clear trackers and follow-ups that keep teams aligned.',
    by: 'Leadership Stakeholder'
  },
  {
    quote:
      'Exceptional attention to detail. Communication is always clear, timely, and professional — even under tight deadlines.',
    by: 'Project Team Member'
  },
  {
    quote:
      'Organized and discreet — trusted with sensitive information and handles complex schedules with ease.',
    by: 'Executive Office'
  }
];

export default function Home() {
  const { openContact } = useContact();
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <Page>
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
        <AnimatedSection>
          <p className="badge w-fit">Executive Assistant · Project Officer</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-slate-300">{profile.tagline}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <a className="btn-ghost" href={profile.cvPath} download>
              Download CV <Download size={18} />
            </a>
            <button className="btn-ghost" onClick={openContact}>
              Contact
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} /> {profile.location}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="relative">
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-200">Professional Summary</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{profile.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">Availability</p>
                <p className="mt-1 text-sm text-slate-300">Remote-ready · Travel-ready</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">Focus</p>
                <p className="mt-1 text-sm text-slate-300">Clarity · Follow-through · Results</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-tealish-600/10 blur-3xl" />
        </AnimatedSection>
      </section>

      {/* Quick summary cards */}
      <AnimatedSection className="mt-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Executive Support',
              body: 'Calendar management, executive correspondence, meeting coordination, minutes, and follow-ups.'
            },
            {
              title: 'Project Coordination',
              body: 'Sprint/task tracking, action item ownership, documentation, reporting cycles, and delivery follow-through.'
            },
            {
              title: 'Stakeholder Management',
              body: 'Clear communication, confidentiality, and timely updates across teams and leadership.'
            }
          ].map((c) => (
            <div key={c.title} className="card card-hover p-6">
              <p className="text-lg font-semibold">{c.title}</p>
              <p className="mt-2 text-sm text-slate-300">{c.body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Core strengths chips */}
      <AnimatedSection className="mt-14">
        <div className="card p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-tealish-500">Core Strengths</p>
              <p className="mt-1 text-slate-300">
                Search and click to copy — handy for CVs, LinkedIn, and job applications.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <SkillChips items={profile.strengths} />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-tealish-500">Featured Projects</p>
            <p className="mt-1 text-slate-300">Real workflow samples from tools I use.</p>
          </div>
          <Link className="btn-ghost" to="/projects">
            See all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => navigate('/projects')} />
          ))}
        </div>
      </AnimatedSection>

      {/* Mini timeline */}
      <AnimatedSection className="mt-14">
        <div className="card p-6">
          <p className="text-sm font-semibold text-tealish-500">Highlights</p>
          <p className="mt-1 text-slate-300">A few moments that summarize how I work.</p>
          <div className="mt-5">
            <Timeline items={highlights as any} />
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="mt-14">
        <TestimonialsCarousel items={testimonials} />
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mt-14">
        <div className="card p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-extrabold">Let’s work together</p>
              <p className="mt-2 text-slate-300">
                Need clean scheduling, documentation, action tracking, or reporting workflows?
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </Link>
              <button className="btn-ghost" onClick={openContact}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Page>
  );
}
