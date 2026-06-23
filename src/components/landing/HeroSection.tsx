import { ArrowRight, Play, ShoppingCart, BarChart3, Package, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onEnterDemo: () => void;
}

export default function HeroSection({ onEnterDemo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Nueva versión disponible
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Dejá los cuadernos.
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-violet-400 bg-clip-text text-transparent">
                Empezá a gestionar.
              </span>
            </h1>

            <p className="mt-6 text-balance text-lg leading-relaxed text-slate-400 sm:text-xl">
              ZNK Gestion es el sistema que necesitás para vender, controlar tu stock
              y saber cuánto ganás. Sin complicaciones, sin curva de aprendizaje.
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 lg:justify-start">
              {[
                { icon: ShoppingCart, label: 'Ventas', value: 'Punto de venta rápido' },
                { icon: Package, label: 'Stock', value: 'Control automático' },
                { icon: BarChart3, label: 'Reportes', value: 'Decisiones claras' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/20">
                    <stat.icon className="h-4 w-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                    <p className="text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={onEnterDemo}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary-500 to-violet-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-primary-500/25 transition-all duration-300 hover:from-primary-400 hover:to-violet-400 hover:shadow-primary-500/40 active:scale-[0.98] sm:w-auto"
              >
                <Play className="h-5 w-5 fill-current" />
                Probar demo gratis
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#modulos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto"
              >
                Ver funciones
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Sin registro · Sin descargar nada · Se abre en el navegador
            </p>
          </div>

          {/* Right - Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/10 bg-slate-800/50 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              {/* Title bar */}
              <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
                </div>
                <span className="ml-2 text-[11px] font-medium text-slate-500">ZNK Gestion — Punto de venta</span>
              </div>
              {/* Sidebar + Content mockup */}
              <div className="flex gap-3">
                {/* Mini sidebar */}
                <div className="w-12 space-y-1.5 rounded-xl bg-slate-700/50 p-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-7 rounded-lg ${i === 1 ? 'bg-primary-500/30' : 'bg-white/5'}`}
                    />
                  ))}
                </div>
                {/* Content area */}
                <div className="flex-1 space-y-2 rounded-xl bg-slate-700/30 p-3">
                  {/* Search bar */}
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-slate-600/40" />
                    <div className="h-8 w-24 rounded-lg bg-primary-500/30" />
                  </div>
                  {/* Product grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="rounded-lg bg-slate-600/30 p-2">
                        <div className="mb-1.5 h-10 rounded bg-slate-500/20" />
                        <div className="h-2 w-3/4 rounded bg-white/10" />
                        <div className="mt-1 h-2 w-1/2 rounded bg-primary-400/30" />
                      </div>
                    ))}
                  </div>
                  {/* Cart preview at bottom */}
                  <div className="flex items-center justify-between rounded-lg bg-slate-600/40 p-2">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-primary-400" />
                      <div className="h-2 w-20 rounded bg-white/10" />
                    </div>
                    <div className="h-7 w-20 rounded-lg bg-gradient-to-r from-primary-500 to-violet-500 opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -right-6 -top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/80 shadow-xl backdrop-blur-sm">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/80 shadow-xl backdrop-blur-sm">
              <BarChart3 className="h-5 w-5 text-violet-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave/gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950" />
    </section>
  );
}
