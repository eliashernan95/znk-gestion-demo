import { Monitor, Smartphone, Laptop } from 'lucide-react';

export default function ScreenshotsSection() {
  return (
    <section id="capturas" className="bg-stone-100/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Vista previa
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Así se ve ZNK Gestion
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-500">
            Limpio, ordenado, rápido. Funciona en Windows, Mac y Linux. Una sola app, sin depender del navegador.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-sm">
            <div className="bg-stone-50 p-3">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-white p-3">
                <div className="flex h-full flex-col gap-2">
                  <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[10px] font-medium text-stone-400">Punto de venta</span>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <div className="w-1/4 rounded-lg bg-primary-50 p-1.5">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="mb-1 h-1.5 rounded bg-primary-200/60" style={{width: `${60 + i*10}%`}} />
                      ))}
                    </div>
                    <div className="flex-1 rounded-lg bg-stone-50 p-2">
                      <div className="h-2 w-3/4 rounded bg-stone-200 mb-1.5" />
                      <div className="h-1.5 w-full rounded bg-stone-100 mb-1" />
                      <div className="h-1.5 w-2/3 rounded bg-stone-100 mb-1" />
                      <div className="h-1.5 w-1/2 rounded bg-stone-100 mb-2" />
                      <div className="h-6 w-full rounded-lg bg-primary-500/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3">
              <Monitor className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-stone-700">Punto de venta</span>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-sm">
            <div className="bg-stone-50 p-3">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-white p-3">
                <div className="flex h-full flex-col gap-2">
                  <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[10px] font-medium text-stone-400">Dashboard</span>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <div className="flex-1 rounded-lg bg-violet-50 p-2">
                      <div className="h-3 w-1/2 rounded bg-violet-200 mb-1.5" />
                      <div className="h-10 w-full rounded bg-violet-100 mb-1" />
                      <div className="flex gap-2 mt-2">
                        <div className="flex-1 h-8 rounded bg-emerald-100" />
                        <div className="flex-1 h-8 rounded bg-amber-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3">
              <Laptop className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium text-stone-700">Dashboard</span>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-sm">
            <div className="bg-stone-50 p-3">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-white p-3">
                <div className="flex h-full flex-col gap-2">
                  <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[10px] font-medium text-stone-400">Productos</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex gap-2 items-center p-1 rounded bg-stone-50">
                      <div className="h-6 w-6 rounded bg-emerald-200" />
                      <div className="flex-1">
                        <div className="h-1.5 w-2/3 rounded bg-stone-200 mb-0.5" />
                        <div className="h-1 w-1/2 rounded bg-stone-100" />
                      </div>
                      <div className="h-5 w-12 rounded bg-stone-200" />
                    </div>
                    <div className="flex gap-2 items-center p-1 rounded bg-stone-50">
                      <div className="h-6 w-6 rounded bg-amber-200" />
                      <div className="flex-1">
                        <div className="h-1.5 w-3/4 rounded bg-stone-200 mb-0.5" />
                        <div className="h-1 w-1/3 rounded bg-stone-100" />
                      </div>
                      <div className="h-5 w-12 rounded bg-stone-200" />
                    </div>
                    <div className="flex gap-2 items-center p-1 rounded bg-stone-50">
                      <div className="h-6 w-6 rounded bg-violet-200" />
                      <div className="flex-1">
                        <div className="h-1.5 w-1/2 rounded bg-stone-200 mb-0.5" />
                        <div className="h-1 w-2/5 rounded bg-stone-100" />
                      </div>
                      <div className="h-5 w-12 rounded bg-stone-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3">
              <Smartphone className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium text-stone-700">Productos</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-stone-400">
          Las capturas reales del sistema se encuentran en la sección de screenshots del repositorio.
        </p>
      </div>
    </section>
  );
}
