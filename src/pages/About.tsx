import { Download, Mail, ShieldCheck, Wrench, Trophy } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Page from '../components/Page';
import SkillChips from '../components/SkillChips';
import SkillBars from '../components/SkillBars';
import { useContact } from '../components/ContactProvider';
import { experience } from '../data/experience';
import { profile } from '../data/profile';

type AccordionItem = {
  title: string;
  subtitle: string;
  content: string[];
};

export default function About() {
  const { openContact } = useContact();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const accordion: AccordionItem[] = useMemo(
    () =>
      experience.map((e) => ({
        title: e.title,
        subtitle: `${e.company} · ${e.location} · ${e.dates}`,
        content: e.bullets
      })),
    []
  );

  const skillGroups = useMemo(
    () => [
      { name: 'Executive Support', items: profile.competencies.slice(0, 6) },
      { name: 'Operations & Documentation', items: profile.competencies.slice(6) },
      { name: 'Tools & Systems', items: profile.tools }
    ],
    []
  );

  return (
    <Page>
      <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="badge w-fit">About</p>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Executive support that keeps things moving</h1>
          <p className="mt-2 max-w-3xl text-slate-300">{profile.summary}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="btn-ghost" href={profile.cvPath} download>
            Download CV <Download size={18} />
          </a>
          <button className="btn-primary" onClick={openContact}>
            Contact <Mail size={18} />
          </button>
        </div>
      </section>

      {/* Strengths */}
      <AnimatedSection className="mt-12">
        <div className="card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-tealish-500">Professional Strengths</p>
              <p className="mt-1 text-slate-300">These are the habits and working style I bring to every role.</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <ShieldCheck size={18} className="text-tealish-500" />
              <span className="text-sm">Discretion · Reliability</span>
            </div>
          </div>
          <div className="mt-5">
            <SkillChips items={profile.strengths} />
          </div>
        </div>
      </AnimatedSection>

      {/* Experience accordion */}
      <AnimatedSection className="mt-12">
        <div className="card p-6">
          <p className="text-sm font-semibold text-tealish-500">Experience</p>
          <p className="mt-1 text-slate-300">Click each role to expand responsibilities and achievements.</p>

          <div className="mt-5 space-y-3">
            {accordion.map((item, idx) => {
              const open = idx === openIndex;
              return (
                <button
                  key={item.title}
                  className="w-full text-left"
                  onClick={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
                >
                  <div className={`rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition ${open ? 'ring-1 ring-tealish-600/40' : 'hover:bg-white/10'}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                    {open ? (
                      <div className="mt-3">
                        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                          {item.content.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills groups */}
      <AnimatedSection className="mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.name} className="card p-6">
              <p className="text-sm font-semibold text-tealish-500">{g.name}</p>
              <div className="mt-4">
                <SkillChips items={g.items} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Capability snapshot */}
      <AnimatedSection className="mt-12">
        <div className="card p-6">
          <p className="text-sm font-semibold text-tealish-500">Capability Snapshot</p>
          <p className="mt-1 text-slate-300">
            A quick, visual summary of the areas I’m strongest in (sample rating for portfolio view).
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <SkillBars
              items={[
                { label: 'Calendar & Scheduling', value: 92, note: 'Meetings, reminders, travel planning', tone: 'emerald' },
                { label: 'Documentation & Minutes', value: 90, note: 'Agendas, minutes, briefs, trackers', tone: 'violet' },
                { label: 'Action Tracking & Follow-ups', value: 94, note: 'Owners, deadlines, escalation', tone: 'teal' },
              ]}
            />
            <SkillBars
              items={[
                { label: 'Reporting & Dashboards', value: 86, note: 'Excel pivots, summaries, charts', tone: 'sky' },
                { label: 'Stakeholder Communication', value: 88, note: 'Clear updates & discretion', tone: 'amber' },
                { label: 'Task Management (Jira/Trello)', value: 84, note: 'Boards, sprints, priorities', tone: 'sky' },
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications / Training */}
      <AnimatedSection className="mt-12">
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-tealish-500" />
            <p className="text-sm font-semibold text-tealish-500">Certifications & Training</p>
          </div>
          <p className="mt-2 text-slate-300">
            Selected training and professional development (sample list). These reflect the areas I actively build capacity in
            for executive support, structured reporting, and project coordination.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              { title: 'Project Coordination Essentials', org: 'Google Workspace (Practical)', year: '2025' },
              { title: 'Executive Assistance & Office Management', org: 'Professional Skills Workshop', year: '2024' },
              { title: 'Advanced Reporting with Excel (Pivot, Charts, Slicers)', org: 'Microsoft Productivity Track', year: '2025' },
              { title: 'Documentation Systems (Confluence/Notion)', org: 'Internal Enablement Program', year: '2025' },
              { title: 'Stakeholder Communication & Meeting Facilitation', org: 'Leadership Support Series', year: '2024' },
              { title: 'Task Management (Jira/Trello) — Workflow Setup', org: 'Agile Ops Bootcamp', year: '2025' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold">{c.title}</p>
                <p className="mt-1 text-sm text-slate-300">{c.org}</p>
                <p className="mt-2 text-xs text-slate-400">{c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tools grid */}
      <AnimatedSection className="mt-12">
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <Wrench size={18} className="text-tealish-500" />
            <p className="text-sm font-semibold text-tealish-500">Tools & Platforms</p>
          </div>
          <p className="mt-2 text-slate-300">The systems I’m comfortable working in daily.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profile.tools.map((t) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {t}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Download section */}
      <AnimatedSection className="mt-12">
        <div className="card p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-extrabold">Download my CV</p>
              <p className="mt-2 text-slate-300">Prefer a quick overview? Get the PDF version.</p>
            </div>
            <a className="btn-primary" href={profile.cvPath} download>
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </Page>
  );
}
