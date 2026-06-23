import {
  ShoppingCart,
  Package,
  BarChart3,
  Banknote,
  Users,
  FileSpreadsheet,
  Moon,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    color: 'text-primary-600 bg-primary-50',
    title: 'Punto de venta',
    desc: 'Buscá productos por código de barras o nombre. Agregá al carrito, aplicá descuentos y cobrá en segundos con múltiples medios de pago.',
  },
  {
    icon: Package,
    color: 'text-emerald-600 bg-emerald-50',
    title: 'Productos y stock',
    desc: 'Gestioná tu catálogo con categorías, marcas y proveedores. Control de stock en tiempo real con alertas de mínimo y vencimientos.',
  },
  {
    icon: Banknote,
    color: 'text-amber-600 bg-amber-50',
    title: 'Caja diaria',
    desc: 'Abrí y cerrá caja con conciliación automática. Registro de ingresos, egresos y arqueo. Todo sincronizado con las ventas.',
  },
  {
    icon: BarChart3,
    color: 'text-violet-600 bg-violet-50',
    title: 'Reportes',
    desc: 'Ventas del día, productos más vendidos, rentabilidad, rotación de stock. Gráficos claros para tomar decisiones informadas.',
  },
  {
    icon: Users,
    color: 'text-rose-600 bg-rose-50',
    title: 'Usuarios y roles',
    desc: 'Creá usuarios con permisos granulares. Cada empleado ve solo lo que necesita: cajero, encargado, administrador.',
  },
  {
    icon: FileSpreadsheet,
    color: 'text-sky-600 bg-sky-50',
    title: 'Importar Excel',
    desc: 'Cargá tu catálogo desde Excel o CSV. Exportá productos, ventas, stock y clientes. Sin migraciones complicadas.',
  },
  {
    icon: Moon,
    color: 'text-slate-600 bg-slate-50',
    title: 'Modo oscuro',
    desc: 'Alterná entre modo claro y oscuro con un clic. Cómodo para trabajar de noche o en ambientes con poca luz.',
  },
  {
    icon: TrendingUp,
    color: 'text-orange-600 bg-orange-50',
    title: 'Simple y rápido',
    desc: 'Interfaz pensada para el ritmo real de un comercio. Fluida, sin distracciones, con atajos de teclado y acceso directo a todo.',
  },
];

export default function FeatureCards() {
  return (
    <section id="funciones" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Funciones
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Todo lo que necesitás, en un solo lugar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-500">
            Cada herramienta está diseñada pensando en el uso diario de un comercio real.
            Sin relleno, sin funciones que nadie usa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group card flex flex-col items-start gap-4 transition-shadow duration-300 hover:shadow-md"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${f.color}`}>
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
