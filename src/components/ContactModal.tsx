import { Mail, Phone } from 'lucide-react';
import { useMemo, useState } from 'react';
import { profile } from '../data/profile';
import { useToast } from './ToastProvider';
import Modal from './Modal';

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const e: string[] = [];
    if (!name.trim()) e.push('Your name is required.');
    if (!email.trim() || !isEmail(email.trim())) e.push('A valid email is required.');
    if (message.trim().length < 12) e.push('Message should be at least 12 characters.');
    return e;
  }, [name, email, message]);

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setTouched(true);
    if (errors.length) return;

    toast({
      title: 'Message prepared',
      message:
        'No backend is configured. Copy your message and send via email — or use the email button.'
    });

    const subject = encodeURIComponent(`Portfolio Inquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);

    setName('');
    setEmail('');
    setMessage('');
    setTouched(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Contact">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-300">
            Reach out for executive support, project coordination, reporting, or documentation workflows.
          </p>

          <div className="mt-4 space-y-2">
            <a className="badge w-fit gap-2" href={`mailto:${profile.email}`}>
              <Mail size={16} /> {profile.email}
            </a>
            <a className="badge w-fit gap-2" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <Phone size={16} /> {profile.phone}
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">Quick note</p>
            <p className="mt-1 text-sm text-slate-300">
              I respond quickly and can work remotely or travel when needed.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="label">Your Name</label>
            <input className="input mt-1" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              className="input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="label">Message</label>
            <textarea
              className="input mt-1 min-h-[120px] resize-y"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me what you need help with..."
            />
          </div>

          {touched && errors.length ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
              <ul className="list-disc pl-5">
                {errors.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <button className="btn-primary w-full" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </Modal>
  );
}
