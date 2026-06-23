import { Zap, Shield, Eye, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    color: 'text-amber-500 bg-amber-50',
    title: 'Vendé más rápido',
    desc: 'Buscá por código de barras, nombre o categoría. Cobrá en segundos con efectivo, tarjeta, transferencia o QR. Sin perder tiempo.',
  },
  {
    icon: Shield,
    color: 'text-emerald-500 bg-emerald-50',
    title: 'Controlá tu stock',
    desc: 'Sabé exactamente qué tenés y qué te falta. Alertas de stock bajo, vencimientos y movimientos. Nunca más te quedás sin vender.',
  },
  {
    icon: Eye,
    color: 'text-violet-500 bg-violet-50',
    title: 'Sabé cuánto ganás',
    desc: 'Reportes diarios, semanales y mensuales. Productos más vendidos, rentabilidad, caja. Tomá decisiones con datos reales.',
  },
  {
    icon: TrendingUp,
    color: 'text-sky-500 bg-sky-50',
    title: 'Crece sin desorden',
    desc: 'Arrancás con lo básico y vas sumando módulos. Multi-usuario con permisos. Ideal si tenés empleados o pensás sumar.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Qué podés hacer
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Menos papeles, más ventas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Un sistema pensado para el ritmo real de un comercio. Sin funciones que no usás,
            sin pantallas innecesarias.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${b.color}`}>
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{b.desc}</p>
              {/* Decorative gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
