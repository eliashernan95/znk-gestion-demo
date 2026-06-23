import { useState, useRef, useEffect } from 'react';
import {
  Search, Barcode, Trash2, Minus, Plus, CreditCard, Banknote, Wallet, QrCode,
  CheckCircle, XCircle, AlertTriangle, Zap, Coffee, ShoppingCart,
} from 'lucide-react';
import { useDemo } from '../../components/demo/DemoStore';
import type { DemoProduct } from '../../data/demoData';
import { demoCategories } from '../../data/demoData';

const sampleBarcodes = [
  { code: '7790001001001', name: 'Café' },
  { code: '7790002002002', name: 'Leche' },
  { code: '7790017007007', name: 'Coca-Cola' },
  { code: '7790003003003', name: 'Yerba' },
];

export default function DemoPOS() {
  const {
    cart, addToCart, removeFromCart, updateQuantity, clearCart,
    cartTotal, cartItemCount, completeSale, getProductByBarcode,
    searchProducts, salesCount, products, availableStock,
    outOfStockMessage, clearOutOfStockMessage,
  } = useDemo();

  const [searchQuery, setSearchQuery] = useState('');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
  const [receipt, setReceipt] = useState<string | null>(null);
  const [limitWarning, setLimitWarning] = useState<string | null>(null);
  const [barcodeError, setBarcodeError] = useState<string | null>(null);
  const barcodeRef = useRef<HTMLInputElement>(null);

  const filteredProducts = (() => {
    let list = products;
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);
    if (searchQuery) list = searchProducts(searchQuery).filter((p) => !selectedCategory || p.category === selectedCategory);
    return list;
  })();

  useEffect(() => {
    barcodeRef.current?.focus();
  }, []);

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = barcodeInput.trim();
    if (!code) return;

    const product = getProductByBarcode(code);
    if (product) {
      const error = addToCart(product);
      if (!error) {
        setBarcodeInput('');
        setBarcodeError(null);
        setReceipt(null);
      }
    } else {
      setBarcodeError(`Código "${code}" no encontrado`);
      setTimeout(() => setBarcodeError(null), 2000);
    }
  };

  const handleCompleteSale = () => {
    if (salesCount >= 10) {
      setLimitWarning('Limite de 10 ventas demo alcanzado');
      return;
    }
    const result = completeSale(paymentMethod);
    if (result.startsWith('Limite')) {
      setLimitWarning(result);
      return;
    }
    setReceipt(result);
    setShowPayment(false);
    setLimitWarning(null);
    setTimeout(() => setReceipt(null), 3000);
  };

  const handlePaymentOpen = () => {
    if (cart.length === 0) return;
    setShowPayment(true);
    setLimitWarning(null);
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'Efectivo': return <Banknote className="h-4 w-4" />;
      case 'Tarjeta': return <CreditCard className="h-4 w-4" />;
      case 'Transferencia': return <Wallet className="h-4 w-4" />;
      case 'QR Mercado Pago': return <QrCode className="h-4 w-4" />;
      default: return <Banknote className="h-4 w-4" />;
    }
  };

  const paymentMethods = ['Efectivo', 'Tarjeta', 'Transferencia', 'QR Mercado Pago', 'Mixto'];

  const getCategoryColor = (cat: string) => {
    const c = demoCategories.find((x) => x.name === cat);
    return c?.color || '#6b7280';
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Products panel */}
      <div className="flex flex-1 flex-col border-r border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        {/* Search + Barcode row */}
        <div className="border-b border-stone-100 p-3 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 pl-10 pr-4 text-sm text-stone-700 placeholder-stone-400 outline-none transition-all focus:border-primary-300 focus:bg-white focus:ring-2 focus:ring-primary-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:placeholder-stone-500 dark:focus:border-primary-600 dark:focus:ring-primary-900/30"
              />
            </div>
            <form onSubmit={handleBarcodeSubmit} className="flex items-center gap-1.5">
              <input
                ref={barcodeRef}
                type="text"
                placeholder="Código..."
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
                className="w-32 rounded-xl border-2 border-primary-200 bg-primary-50/30 py-2.5 px-3 text-sm font-mono text-stone-700 placeholder-stone-400 outline-none transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 dark:border-primary-800 dark:bg-primary-900/20 dark:text-stone-200 dark:placeholder-stone-500"
              />
              <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white transition-colors hover:bg-primary-700" title="Escanear (Enter)">
                <Barcode className="h-4 w-4" />
              </button>
            </form>
          </div>

          {(barcodeError || receipt || outOfStockMessage) && (
            <div className={`mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium animate-in fade-in ${
              receipt
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : barcodeError
                ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400'
            }`}>
              {receipt ? <CheckCircle className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
              {receipt || barcodeError || outOfStockMessage}
              {outOfStockMessage && !receipt && (
                <button onClick={clearOutOfStockMessage} className="ml-auto text-amber-500 hover:text-amber-600">
                  <XCircle className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Category chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                !selectedCategory ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400' : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400'
              }`}
            >
              Todos
            </button>
            {demoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                  selectedCategory === cat.name ? 'text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400'
                }`}
                style={selectedCategory === cat.name ? { backgroundColor: cat.color } : {}}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 overflow-auto p-3">
          {filteredProducts.length === 0 ? (
            <div className="flex h-full items-center justify-center text-stone-400">
              <p className="text-sm">Sin productos</p>
            </div>
          ) : (
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={addToCart}
                  available={availableStock(product.id)}
                  catColor={getCategoryColor(product.category)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Barcode examples */}
        <div className="border-t border-stone-100 px-3 py-2 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-medium text-stone-400">Códigos de prueba:</span>
            <div className="flex flex-wrap gap-1.5">
              {sampleBarcodes.map((s) => (
                <button
                  key={s.code}
                  onClick={() => {
                    const p = getProductByBarcode(s.code);
                    if (p) addToCart(p);
                  }}
                  className="flex items-center gap-1 rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] font-mono text-stone-500 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-primary-700 dark:hover:bg-primary-900/20"
                  title={`Escanear ${s.name}`}
                >
                  <Zap className="h-2.5 w-2.5" />
                  <span className="hidden sm:inline">{s.name}</span> {s.code.slice(-4)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart panel */}
      <div className="flex w-full flex-col border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900 lg:w-[420px] lg:border-l lg:border-t-0">
        <div className="flex items-center justify-between border-b border-stone-100 px-4 py-3 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-primary-500" />
            <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-200">
              Venta · {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
            </h2>
          </div>
          {cart.length > 0 && (
            <button onClick={clearCart} className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20">
              <Trash2 className="h-3 w-3" />
              Vaciar
            </button>
          )}
        </div>

        <div className="flex-1 overflow-auto">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-stone-400 dark:text-stone-500">
              <Barcode className="h-10 w-10 opacity-20" />
              <div>
                <p className="text-sm font-medium">Carrito vacío</p>
                <p className="mt-1 text-xs">Buscá un producto o escribí un código de barras</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-stone-50 dark:divide-stone-800">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-700 truncate dark:text-stone-200">{item.product.name}</p>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      ${item.product.price.toLocaleString('es-AR')} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <button onClick={() => updateQuantity(index, -1)} className="flex h-6 w-6 items-center justify-center rounded-md text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-semibold text-stone-700 dark:text-stone-200">{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)} className="flex h-6 w-6 items-center justify-center rounded-md text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed" disabled={item.quantity >= item.product.stock}>
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="w-16 text-right text-sm font-semibold text-stone-800 dark:text-stone-100">
                    ${(item.product.price * item.quantity - item.discount).toLocaleString('es-AR')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-stone-100 p-4 dark:border-stone-800">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-stone-500 dark:text-stone-400">Total</span>
              <span className="text-xl font-bold text-stone-800 dark:text-stone-100">
                ${cartTotal.toLocaleString('es-AR')}
              </span>
            </div>

            {limitWarning && (
              <div className="mb-3 flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
                <AlertTriangle className="h-3.5 w-3.5" />
                {limitWarning}
              </div>
            )}

            <button onClick={handlePaymentOpen} className="btn-primary w-full py-3 text-sm">
              Cobrar · ${cartTotal.toLocaleString('es-AR')}
            </button>
          </div>
        )}
      </div>

      {/* Payment modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowPayment(false)}>
          <div className="mx-4 w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-5 shadow-xl dark:border-stone-800 dark:bg-stone-900" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-stone-800 dark:text-stone-100">Confirmar cobro</h3>
              <button onClick={() => setShowPayment(false)} className="rounded-lg p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800">
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-4 rounded-xl bg-stone-50 p-4 dark:bg-stone-800">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500 dark:text-stone-400">Productos</span>
                <span className="font-semibold text-stone-700 dark:text-stone-200">{cartItemCount}</span>
              </div>
              <div className="mt-2 flex justify-between text-lg">
                <span className="font-medium text-stone-600 dark:text-stone-300">Total</span>
                <span className="font-bold text-stone-800 dark:text-stone-100">${cartTotal.toLocaleString('es-AR')}</span>
              </div>
            </div>

            <label className="mb-2 block text-xs font-semibold text-stone-500 dark:text-stone-400">Medio de pago</label>
            <div className="mb-4 grid grid-cols-2 gap-2">
              {paymentMethods.slice(0, 4).map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all ${
                    paymentMethod === method
                      ? 'border-primary-300 bg-primary-50 text-primary-700 dark:border-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'border-stone-200 text-stone-500 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-800'
                  }`}
                >
                  {getPaymentIcon(method)}
                  {method}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button onClick={() => setShowPayment(false)} className="btn-secondary flex-1">Cancelar</button>
              <button onClick={handleCompleteSale} className="btn-primary flex-1">
                <CheckCircle className="h-4 w-4" />
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, onAdd, available, catColor }: { product: DemoProduct; onAdd: (p: DemoProduct) => string | null; available: number; catColor: string }) {
  const lowStock = product.stock <= product.minStock;
  const noStock = available <= 0;

  return (
    <button
      onClick={() => { if (!noStock) onAdd(product); }}
      disabled={noStock}
      className={`group relative flex flex-col items-start gap-2 rounded-xl border p-3 text-left transition-all ${
        noStock
          ? 'border-stone-100 bg-stone-100/50 opacity-50 cursor-not-allowed dark:border-stone-800 dark:bg-stone-800/30'
          : 'border-stone-100 bg-stone-50 hover:border-primary-200 hover:bg-white hover:shadow-md dark:border-stone-800 dark:bg-stone-800/50 dark:hover:border-primary-700 dark:hover:bg-stone-800'
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: catColor }} />
          <span className="text-[10px] font-medium text-stone-400">{product.category}</span>
        </div>
        {noStock ? (
          <span className="text-[10px] font-bold text-red-500">Sin stock</span>
        ) : lowStock ? (
          <AlertTriangle className="h-3 w-3 text-amber-500" />
        ) : null}
      </div>

      <span className={`text-sm font-semibold line-clamp-1 ${
        noStock ? 'text-stone-400 dark:text-stone-500' : 'text-stone-700 group-hover:text-primary-700 dark:text-stone-200 dark:group-hover:text-primary-400'
      }`}>
        {product.name}
      </span>

      <div className="flex w-full items-end justify-between">
        <span className={`text-lg font-bold ${noStock ? 'text-stone-400' : 'text-primary-600 dark:text-primary-400'}`}>
          ${product.price.toLocaleString('es-AR')}
        </span>
        <span className={`text-[10px] ${lowStock ? 'text-amber-600 font-bold' : 'text-stone-400'}`}>
          Stock: {available}
        </span>
      </div>

      <span className="text-[10px] text-stone-400 font-mono opacity-50 group-hover:opacity-100 transition-opacity">
        {product.barcode.slice(-8)}
      </span>

      {!noStock && (
        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-sm">
          <Plus className="h-3.5 w-3.5" />
        </div>
      )}
    </button>
  );
}
