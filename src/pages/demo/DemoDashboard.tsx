import { useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  TrendingUp, Package, DollarSign, ShoppingCart, Clock, AlertTriangle,
  ChevronRight, PackageOpen,
} from 'lucide-react';
import { useDemo } from '../../components/demo/DemoStore';
import { demoCategories } from '../../data/demoData';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const COLORS = ['#4c6ef5', '#12b886', '#f59e0b', '#e64980', '#7950f2'];

export default function DemoDashboard() {
  const { sales, soldItems, products, todayTotal, todayCount, salesCount, lowStockCount } = useDemo();

  const groupedByName = useMemo(() => {
    const map: Record<string, { name: string; qty: number; cat: string }> = {};
    soldItems.forEach((item) => {
      if (!map[item.name]) {
        map[item.name] = { name: item.name, qty: 0, cat: item.category };
      }
      map[item.name].qty += item.quantity;
    });
    return Object.values(map)
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 8);
  }, [soldItems]);

  const categoryData = useMemo(() => {
    const map: Record<string, number> = {};
    soldItems.forEach((item) => {
      map[item.category] = (map[item.category] || 0) + item.quantity;
    });
    return demoCategories
      .filter((c) => map[c.name])
      .map((c) => ({ name: c.name, value: map[c.name] || 0 }));
  }, [soldItems]);

  const weeklyData = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() - (6 - i));
      const dayStr = format(d, 'yyyy-MM-dd');
      const daySales = sales.filter((s) => s.date.startsWith(dayStr));
      return {
        day: format(d, 'EEE', { locale: es }),
        ventas: daySales.reduce((sum, s) => sum + s.total, 0),
      };
    });
  }, [sales]);

  const lowStock = products.filter((p) => p.stock <= p.minStock);

  const stats = [
    { label: 'Ventas hoy', value: `$${todayTotal.toLocaleString('es-AR')}`, sub: `${todayCount} ventas`, icon: DollarSign, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30' },
    { label: 'Total ventas', value: salesCount, sub: 'en la demo', icon: ShoppingCart, color: 'text-primary-500 bg-primary-50 dark:bg-primary-900/30' },
    { label: 'Prod. vendidos', value: soldItems.reduce((s, i) => s + i.quantity, 0), sub: 'unidades', icon: PackageOpen, color: 'text-violet-500 bg-violet-50 dark:bg-violet-900/30' },
    { label: 'Stock bajo', value: lowStockCount, sub: lowStockCount > 0 ? 'revisar' : 'todo ok', icon: AlertTriangle, color: lowStockCount > 0 ? 'text-red-500 bg-red-50 dark:bg-red-900/30' : 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30' },
  ];

  const emptyState = salesCount === 0;

  return (
    <div className="h-full overflow-auto bg-stone-50 p-4 sm:p-6 dark:bg-stone-950">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Dashboard</h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          {format(new Date(), "EEEE d 'de' MMMM", { locale: es })} · {salesCount} ventas en la demo
        </p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-stone-500 dark:text-stone-400">{stat.label}</p>
              <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-1 text-xl font-bold text-stone-800 dark:text-stone-100">{stat.value}</p>
            <p className="text-[11px] text-stone-400 dark:text-stone-500">{stat.sub}</p>
          </div>
        ))}
      </div>

      {emptyState ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white py-16 dark:border-stone-800 dark:bg-stone-900">
          <ShoppingCart className="h-16 w-16 text-stone-200 dark:text-stone-700" />
          <h3 className="mt-4 text-lg font-semibold text-stone-500 dark:text-stone-400">Sin ventas todavía</h3>
          <p className="mt-1 text-sm text-stone-400 dark:text-stone-500">
            Andá al Punto de venta y hacé tu primera venta. Los datos aparecerán acá.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <h3 className="mb-4 text-sm font-semibold text-stone-700 dark:text-stone-200">Ventas de la semana</h3>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.15} />
                  <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #d1d5db',
                      backgroundColor: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      fontSize: '13px',
                      color: '#1f2937',
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString('es-AR')}`, 'Ventas']}
                  />
                  <Bar dataKey="ventas" fill="#4c6ef5" radius={[6, 6, 0, 0]} maxBarSize={36} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <h3 className="mb-4 text-sm font-semibold text-stone-700 dark:text-stone-200">Más vendidos</h3>
            {groupedByName.length === 0 ? (
              <div className="flex h-[220px] items-center justify-center text-sm text-stone-400">Sin datos</div>
            ) : (
              <div className="space-y-2">
                {groupedByName.map((item, i) => {
                  const maxQty = groupedByName[0]?.qty || 1;
                  const pct = Math.round((item.qty / maxQty) * 100);
                  return (
                    <div key={item.name} className="flex items-center gap-2">
                      <span className="w-5 text-xs font-bold text-stone-400">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="font-medium text-stone-700 truncate dark:text-stone-300">{item.name}</span>
                          <span className="text-stone-500 dark:text-stone-400">{item.qty} uds.</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <h3 className="mb-4 text-sm font-semibold text-stone-700 dark:text-stone-200">Historial de ventas</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-100 dark:border-stone-800">
                    <th className="pb-2 text-xs font-semibold text-stone-400">Venta</th>
                    <th className="pb-2 text-xs font-semibold text-stone-400">Hora</th>
                    <th className="pb-2 text-xs font-semibold text-stone-400">Items</th>
                    <th className="pb-2 text-xs font-semibold text-stone-400">Medio de pago</th>
                    <th className="pb-2 text-xs font-semibold text-stone-400 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[...sales].reverse().map((sale) => (
                    <tr key={sale.id} className="border-b border-stone-50 dark:border-stone-800/50">
                      <td className="py-2 text-xs font-mono font-semibold text-primary-600 dark:text-primary-400">
                        #{sale.id}
                      </td>
                      <td className="py-2 text-xs text-stone-500 dark:text-stone-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {sale.date.includes(' ') ? sale.date.split(' ')[1]?.slice(0, 5) : '--:--'}
                        </div>
                      </td>
                      <td className="py-2 text-xs text-stone-600 dark:text-stone-300">{sale.items}</td>
                      <td className="py-2">
                        <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-400">
                          {sale.paymentMethod}
                        </span>
                      </td>
                      <td className="py-2 text-xs font-semibold text-stone-700 text-right dark:text-stone-200">
                        ${sale.total.toLocaleString('es-AR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {lowStock.length > 0 && (
            <div className="lg:col-span-2 rounded-2xl border border-red-100 bg-red-50/50 p-4 dark:border-red-900/30 dark:bg-red-950/20">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <h3 className="text-sm font-semibold text-red-700 dark:text-red-400">Stock bajo ({lowStock.length})</h3>
              </div>
              <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                {lowStock.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-1.5 dark:bg-stone-900/60">
                    <span className="text-xs font-medium text-stone-700 truncate dark:text-stone-300">{p.name}</span>
                    <span className="ml-2 text-xs font-bold text-red-600 dark:text-red-400">{p.stock}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
