import React, { createContext, useContext, useMemo, useState } from 'react';
import ContactModal from './ContactModal';

type ContactContextValue = {
  openContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error('useContact must be used within ContactProvider');
  return ctx;
}

export default function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(() => ({ openContact: () => setOpen(true) }), []);

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </ContactContext.Provider>
  );
}
