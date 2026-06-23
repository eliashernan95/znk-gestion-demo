import { Github, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="border-t border-stone-200/60 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
              Z
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-700">ZNK Gestion</p>
              <p className="text-xs text-stone-400">Sistema de gestión y ventas para comercios</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-stone-400 transition-colors hover:text-stone-600"
            >
              <Github className="h-4 w-4" />
              Ver en GitHub
            </a>
          </div>

          <p className="flex items-center gap-1 text-xs text-stone-400">
            Hecho con <Heart className="h-3 w-3 fill-red-400 text-red-400" /> para comercios reales
          </p>
        </div>
      </div>
    </footer>
  );
}
