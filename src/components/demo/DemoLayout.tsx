import { useState, type ReactNode } from 'react';
import {
  ShoppingCart, Package, LayoutDashboard, Moon, Sun, LogOut,
  ChevronLeft, ChevronRight, AlertTriangle, RefreshCw,
} from 'lucide-react';
import { useDemo } from './DemoStore';

interface NavItem {
  id: string;
  label: string;
  icon: typeof ShoppingCart;
  color: string;
}

const navItems: NavItem[] = [
  { id: 'pos', label: 'Punto de venta', icon: ShoppingCart, color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400' },
  { id: 'productos', label: 'Productos', icon: Package, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400' },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-400' },
];

interface DemoLayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  onExit: () => void;
}

export default function DemoLayout({ children, activePage, onNavigate, onExit }: DemoLayoutProps) {
  const { darkMode, toggleDarkMode, salesCount, products, lowStockCount, resetDemo } = useDemo();
  const [collapsed, setCollapsed] = useState(false);

  const handleReset = () => {
    if (salesCount > 0) {
      const ok = window.confirm('Esto borrará todas las ventas de la demo y restaurará el stock. ¿Continuar?');
      if (!ok) return;
    }
    resetDemo();
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      <aside
        className={`flex flex-col border-r border-stone-200 bg-white transition-all duration-300 dark:border-stone-800 dark:bg-stone-900 ${
          collapsed ? 'w-[68px]' : 'w-[240px]'
        }`}
      >
        <div className="flex h-14 items-center gap-3 border-b border-stone-100 px-4 dark:border-stone-800">
          {!collapsed && (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">Z</div>
              <span className="text-sm font-bold tracking-tight text-stone-800 dark:text-stone-100">
                ZNK<span className="text-primary-600"> Gestion</span>
              </span>
            </>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                activePage === item.id
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-200'
              }`}
              title={item.label}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color} ${activePage === item.id ? 'opacity-100' : 'opacity-70'}`}>
                <item.icon className="h-4 w-4" />
              </div>
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="border-t border-stone-100 p-2 dark:border-stone-800">
          <button onClick={handleReset} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-amber-600 transition-all hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20" title="Reiniciar demo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/20">
              <RefreshCw className="h-4 w-4" />
            </div>
            {!collapsed && <span>Reiniciar demo</span>}
          </button>

          <button onClick={toggleDarkMode} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-stone-500 transition-all hover:bg-stone-50 hover:text-stone-700 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-200" title={darkMode ? 'Modo claro' : 'Modo oscuro'}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800">
              {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-slate-500" />}
            </div>
            {!collapsed && <span>{darkMode ? 'Modo claro' : 'Modo oscuro'}</span>}
          </button>

          <button onClick={onExit} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-stone-500 transition-all hover:bg-red-50 hover:text-red-600 dark:text-stone-400 dark:hover:bg-red-900/20 dark:hover:text-red-400" title="Salir de la demo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800">
              <LogOut className="h-4 w-4" />
            </div>
            {!collapsed && <span>Salir</span>}
          </button>
        </div>
      </aside>

      <div className="relative flex flex-1 flex-col overflow-hidden bg-stone-50 dark:bg-stone-950">
        <header className="flex h-14 items-center justify-between border-b border-stone-200 bg-white px-6 dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 dark:bg-amber-900/20">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                Demo · {lowStockCount > 0 && `${lowStockCount} stock bajo · `}{salesCount}/10 ventas
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {salesCount > 0 && (
              <button onClick={handleReset} className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-amber-600 transition-colors hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20">
                <RefreshCw className="h-3 w-3" />
                Reiniciar
              </button>
            )}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-xs font-bold text-stone-500 dark:bg-stone-800 dark:text-stone-400">D</span>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">Demo</p>
              <p className="text-[10px] text-stone-400 dark:text-stone-500">Usuario de prueba</p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>

      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center select-none">
        <span className="rotate-[-30deg] text-[80px] font-black uppercase tracking-[0.2em] text-stone-900/[0.03] dark:text-stone-100/[0.02]">
          VERSIÓN DEMO
        </span>
      </div>
    </div>
  );
}
