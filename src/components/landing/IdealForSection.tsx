import {
  Store,
  SprayCan,
  Wrench,
  Apple,
  Shirt,
  PawPrint,
  Coffee,
  ShoppingBag,
} from 'lucide-react';

const businesses = [
  { icon: Coffee, name: 'Kioscos y almacenes', desc: 'Manejo de gran volumen de productos chicos. Código de barras rápido.' },
  { icon: SprayCan, name: 'Limpieza y perfumería', desc: 'Control de stock por fragancia, tamaño y marca. Precios claros.' },
  { icon: Wrench, name: 'Ferreterías', desc: 'Productos por unidad, metro o kilo. Proveedores y compras.' },
  { icon: Apple, name: 'Verdulerías', desc: 'Precios por kilo. Alta rotación. Sin complicaciones.' },
  { icon: Shirt, name: 'Indumentaria', desc: 'Talles, colores y variantes. Clientes frecuentes.' },
  { icon: PawPrint, name: 'Pet shops', desc: 'Alimentos, juguetes y accesorios. Control por marca y tipo.' },
  { icon: Store, name: 'Comercios generales', desc: 'El sistema se adapta a tu rubro. Plantillas precargadas.' },
  { icon: ShoppingBag, name: 'Tu negocio', desc: 'Si vendés productos físicos, ZNK Gestion es para vos.' },
];

export default function IdealForSection() {
  return (
    <section id="ideal-para" className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            Ideal para
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No importa qué vendas, ZNK se adapta
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            El sistema viene con plantillas precargadas según tu rubro. Elegí, configurá
            y empezá a vender en minutos.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((b) => (
            <div
              key={b.name}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{b.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
