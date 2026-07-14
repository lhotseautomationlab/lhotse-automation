"use client";
import React, { useState, createContext, useContext, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type SheetContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SheetContext = createContext<SheetContextType | null>(null);

export function Sheet({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  // Prevent background page scroll when sheet is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const original = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [open]);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
  );
}

export function SheetTrigger({ asChild, children }: { asChild?: boolean; children: any }) {
  const ctx = useContext(SheetContext);
  if (!ctx) return null;
  const child = React.Children.only(children);
  return React.cloneElement(child, { onClick: () => ctx.setOpen(true) });
}

export function SheetContent({ children, position = 'right', size = 'sm:w-72' }: { children: any; position?: 'right' | 'left'; size?: string }) {
  const ctx = useContext(SheetContext);
  if (!ctx) return null;
  if (!ctx.open) return null;

  const handleContentClick = (e: any) => {
    // close when a link inside the sheet is clicked
    const anchor = (e.target as HTMLElement).closest && (e.target as HTMLElement).closest('a');
    if (anchor) {
      ctx.setOpen(false);
      // allow default navigation/anchor scroll to proceed
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/40 z-40" onClick={() => ctx.setOpen(false)} />
      <div
        className={`fixed inset-y-0 ${position === 'right' ? 'right-0' : 'left-0'} z-50 h-full bg-white p-6 w-full ${size} max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-sm overflow-auto`}
        onClick={handleContentClick}
        role="dialog"
        aria-modal="true"
      >
        <button className="mb-6 inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100" onClick={() => ctx.setOpen(false)} aria-label="Close menu">
          <X className="h-5 w-5 text-slate-800" />
          <span className="sr-only">Close menu</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export function SheetHeader({ children }: PropsWithChildren) {
  return <div className="mb-4">{children}</div>;
}

export function SheetTitle({ children }: PropsWithChildren) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export default Sheet;
