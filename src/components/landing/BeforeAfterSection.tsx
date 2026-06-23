import { X, Check, ArrowRight } from 'lucide-react';

const painPoints = [
  { before: 'Cuaderno o planilla de Excel que se desordena', after: 'Sistema con todo en un solo lugar, siempre ordenado' },
  { before: 'No sabés cuánto stock te queda realmente', after: 'Stock en tiempo real con alertas de reposición' },
  { before: 'Cerrar la caja a fin del día es un dolor de cabeza', after: 'Caja automática: abrís, vendés, cerrás. Concilia solo' },
  { before: 'No podés saber cuánto ganaste en el mes sin hacer cuentas', after: 'Reportes automáticos. Abrís el dashboard y ya está' },
  { before: 'Si tenés empleados, no sabés quién hizo qué', after: 'Cada empleado tiene su usuario. Todo queda registrado' },
  { before: 'Perdiste una venta por no encontrar el precio', after: 'Buscás por código o nombre. El precio aparece al instante' },
];

export default function BeforeAfterSection() {
  return (
    <section id="antes-despues" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Antes y después
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            El cambio que vas a notar desde el día uno
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Esto no es teoría. Es lo que pasa cuando pasás de métodos improvisados a un sistema pensado para comercios.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-slate-200 dark:divide-slate-800">
          {painPoints.map((item, i) => (
            <div key={i} className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6">
              {/* Antes */}
              <div className="flex flex-1 items-start gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4 dark:border-red-900/30 dark:bg-red-950/20">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <X className="h-3 w-3 text-red-500" />
                </div>
                <span className="text-sm font-medium text-red-800 dark:text-red-300">{item.before}</span>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center sm:flex-col">
                <ArrowRight className="h-5 w-5 rotate-90 text-slate-300 sm:rotate-0" />
              </div>

              {/* Después */}
              <div className="flex flex-1 items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-900/30 dark:bg-emerald-950/20">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <Check className="h-3 w-3 text-emerald-500" />
                </div>
                <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
