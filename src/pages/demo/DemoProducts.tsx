import { useState } from 'react';
import { Search, Package, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useDemo } from '../../components/demo/DemoStore';
import { demoCategories } from '../../data/demoData';

export default function DemoProducts() {
  const { products, searchProducts } = useDemo();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const filtered = (searchQuery ? searchProducts(searchQuery) : products)
    .filter((p) => !selectedCategory || p.category === selectedCategory);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Productos</h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {filtered.length} de {products.length} productos
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 rounded-xl border border-stone-200 bg-stone-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary-300 focus:ring-2 focus:ring-primary-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:placeholder-stone-500 dark:focus:border-primary-600 dark:focus:ring-primary-900/30"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              !selectedCategory
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
            }`}
          >
            Todos
          </button>
          {demoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat.name
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700'
              }`}
              style={selectedCategory === cat.name ? {} : {}}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {filtered.length === 0 ? (
          <div className="flex h-full items-center justify-center text-stone-400 dark:text-stone-500">
            <div className="text-center">
              <Package className="mx-auto h-10 w-10 opacity-20" />
              <p className="mt-2 text-sm">No se encontraron productos</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-stone-200 bg-white transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900"
              >
                <button
                  onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                  className="flex w-full items-center gap-4 px-4 py-3 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-800">
                    <Package className="h-5 w-5 text-stone-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-stone-800 truncate dark:text-stone-200">
                      {product.name}
                    </p>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      {product.category} · {product.brand}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-stone-700 dark:text-stone-200">
                      ${product.price.toLocaleString('es-AR')}
                    </p>
                    <div className="flex items-center gap-1 justify-end">
                      <span className={`text-xs font-medium ${product.stock <= product.minStock ? 'text-red-500' : 'text-stone-400'}`}>
                        Stock: {product.stock}
                      </span>
                      {product.stock <= product.minStock && (
                        <AlertTriangle className="h-3 w-3 text-red-400" />
                      )}
                    </div>
                  </div>
                  {expandedProduct === product.id ? (
                    <ChevronUp className="h-4 w-4 text-stone-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-stone-400" />
                  )}
                </button>

                {expandedProduct === product.id && (
                  <div className="border-t border-stone-100 px-4 py-3 dark:border-stone-800">
                    <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                      <div>
                        <p className="text-xs text-stone-400 dark:text-stone-500">Código</p>
                        <p className="font-mono text-xs font-medium text-stone-600 dark:text-stone-300">
                          {product.barcode}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 dark:text-stone-500">Unidad</p>
                        <p className="text-xs font-medium text-stone-600 dark:text-stone-300">{product.unit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 dark:text-stone-500">Precio costo</p>
                        <p className="text-xs font-medium text-stone-600 dark:text-stone-300">
                          ${product.cost.toLocaleString('es-AR')}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 dark:text-stone-500">Stock mínimo</p>
                        <p className="text-xs font-medium text-stone-600 dark:text-stone-300">{product.minStock}</p>
                      </div>
                      <div className="col-span-full">
                        <p className="text-xs text-stone-400 dark:text-stone-500">Margen</p>
                        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          {Math.round(((product.price - product.cost) / product.cost) * 100)}% · 
                          Ganancia ${(product.price - product.cost).toLocaleString('es-AR')} por unidad
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
