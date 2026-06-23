import { Menu, X, Github } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onEnterDemo: () => void;
}

export default function Navbar({ onEnterDemo }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white shadow-sm">
            Z
          </div>
          <span className="text-lg font-bold tracking-tight text-stone-800">
            ZNK<span className="text-primary-600"> Gestion</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#modulos" className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-800">
            Módulos
          </a>
          <a href="#ideal-para" className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-800">
            Ideal para
          </a>
          <a href="#antes-despues" className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-800">
            Comparativa
          </a>
          <a
            href="https://github.com/eliashernan95/znk-gestion-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <button onClick={onEnterDemo} className="btn-primary px-5 py-2.5 text-sm">
            Probar demo
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-500 transition-colors hover:bg-stone-100 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            <a href="#modulos" className="rounded-xl px-4 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50" onClick={() => setOpen(false)}>
              Módulos
            </a>
            <a href="#ideal-para" className="rounded-xl px-4 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50" onClick={() => setOpen(false)}>
              Ideal para
            </a>
            <a href="#antes-despues" className="rounded-xl px-4 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50" onClick={() => setOpen(false)}>
              Comparativa
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="rounded-xl px-4 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50">
              GitHub
            </a>
            <button onClick={() => { onEnterDemo(); setOpen(false); }} className="btn-primary mt-2">
              Probar demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
