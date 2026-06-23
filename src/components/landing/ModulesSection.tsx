import {
  ShoppingCart,
  Package,
  Banknote,
  Users,
  BarChart3,
  FileSpreadsheet,
  Moon,
  Shield,
} from 'lucide-react';

const modules = [
  {
    icon: ShoppingCart,
    gradient: 'from-primary-500 to-blue-500',
    bg: 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400',
    title: 'Punto de venta',
    desc: 'Interfaz limpia para vender rápido. Buscá por código de barras, nombre o categoría. Carrito, descuentos y múltiples medios de pago.',
    tags: ['Código de barras', 'Efectivo', 'Tarjeta', 'QR'],
  },
  {
    icon: Package,
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
    title: 'Stock inteligente',
    desc: 'Control real de lo que entra y sale. Alertas de stock bajo, vencimientos, movimientos. Categorías, marcas y proveedores.',
    tags: ['Alertas', 'Categorías', 'Movimientos', 'Importar Excel'],
  },
  {
    icon: Banknote,
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
    title: 'Caja diaria',
    desc: 'Apertura y cierre de caja con conciliación automática. Registro de ingresos, egresos y arqueo. Todo atado a las ventas.',
    tags: ['Apertura/Cierre', 'Arqueo', 'Historial'],
  },
  {
    icon: Users,
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400',
    title: 'Usuarios y roles',
    desc: 'Cada empleado ve solo lo que necesita. Permisos granulares: cajero, encargado, administrador. Cambio de usuario sin cerrar sesión.',
    tags: ['Roles', 'Permisos', 'Multi-usuario'],
  },
  {
    icon: BarChart3,
    gradient: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400',
    title: 'Reportes',
    desc: 'Ventas del día, productos más vendidos, rentabilidad, rotación. Gráficos claros. Exportá a Excel o PDF cuando quieras.',
    tags: ['Gráficos', 'Diario', 'Semanal', 'Mensual'],
  },
  {
    icon: FileSpreadsheet,
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400',
    title: 'Importar y exportar',
    desc: 'Cargá tu catálogo desde Excel. Exportá productos, ventas, clientes. Migrar de otro sistema nunca fue tan fácil.',
    tags: ['Excel', 'CSV', 'Backup'],
  },
  {
    icon: Moon,
    gradient: 'from-slate-600 to-slate-500',
    bg: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
    title: 'Modo oscuro',
    desc: 'Alterná entre modo claro y oscuro con un clic. La interfaz se adapta para trabajar cómodo de noche o en ambientes con poca luz.',
    tags: ['Claro/Oscuro', 'Automático'],
  },
  {
    icon: Shield,
    gradient: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400',
    title: 'Respaldo y seguridad',
    desc: 'Backup automático de la base de datos. Restauración en un clic. Tus datos seguros, siempre. Sin depender de internet.',
    tags: ['Backup', 'Local', 'Seguro'],
  },
];

export default function ModulesSection() {
  return (
    <section id="modulos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Módulos
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Todo lo que necesitás para gestionar tu comercio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Cada módulo está pensado para resolver un problema real. Nada de relleno.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Gradient stripe top */}
              <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${mod.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${mod.bg}`}>
                <mod.icon className="h-5 w-5" />
              </div>

              <h3 className="text-base font-bold text-slate-800 dark:text-white">{mod.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{mod.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
