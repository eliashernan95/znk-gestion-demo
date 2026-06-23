import { Play, ArrowRight, Monitor, Shield, Zap } from 'lucide-react';

interface CTASectionProps {
  onEnterDemo: () => void;
}

export default function CTASection({ onEnterDemo }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-b from-primary-600 via-primary-700 to-violet-700 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Probá ZNK Gestion ahora.
            <br />
            <span className="text-primary-200">Sin registrarte, sin instalar nada.</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary-100">
            Entrá a la demo, jugá con el punto de venta, mirá los reportes.
            Si te gusta, lo hablamos.
          </p>

          <div className="mt-10">
            <button
              onClick={onEnterDemo}
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary-700 shadow-2xl shadow-black/20 transition-all duration-300 hover:bg-primary-50 hover:shadow-black/30 active:scale-[0.98]"
            >
              <Play className="h-6 w-6 fill-primary-600 text-primary-600" />
              Probar demo gratis
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Monitor, text: 'Sin instalar' },
              { icon: Shield, text: 'Sin datos reales' },
              { icon: Zap, text: 'Acceso inmediato' },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-primary-200">
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
