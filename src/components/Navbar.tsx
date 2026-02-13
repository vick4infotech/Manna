import { Briefcase, Home, Info, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import { useContact } from './ContactProvider';

const linkBase =
  'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition';

export default function Navbar() {
  const { openContact } = useContact();
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0]?.toUpperCase())
    .join('') || 'DJ';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl ring-1 ring-white/10 grid place-items-center bg-gradient-to-br from-teal-500/25 via-sky-500/20 to-violet-500/25">
            <span className="text-sm font-extrabold text-white">{initials}</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-xs text-slate-400">{profile.titles.join(' · ')}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'}`
            }
          >
            <Home size={16} /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'}`
            }
          >
            <Info size={16} /> About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'}`
            }
          >
            <Briefcase size={16} /> Projects
          </NavLink>
          <button className="btn-ghost" onClick={openContact}>
            <Mail size={16} /> Contact
          </button>
        </nav>

        <button className="btn-ghost md:hidden" onClick={openContact} aria-label="Contact">
          <Mail size={18} />
        </button>
      </div>
    </header>
  );
}
