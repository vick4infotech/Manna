import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidthClass = 'max-w-3xl'
}: {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidthClass?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-label="Close modal"
          />
          <motion.div
            className={`relative w-full ${maxWidthClass} card overflow-hidden`}
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {title ? (
              <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                <div className="text-lg font-semibold">{title}</div>
              </div>
            ) : null}
            <div className="px-6 py-5">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
