import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-400">{profile.location}</p>
            {profile.linkedin ? (
              <p className="mt-2 text-sm text-slate-400">
                LinkedIn: <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace('https://', '')}</a>
              </p>
            ) : null}
          </div>
          <div className="text-sm text-slate-400">
            <p>
              Email: <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>
              Phone: <a className="link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="text-slate-500">Built with React + Tailwind + Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
