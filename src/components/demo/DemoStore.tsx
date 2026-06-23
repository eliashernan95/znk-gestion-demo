import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { DemoProduct, DemoCartItem, DemoSale } from '../../data/demoData';
import { demoProducts } from '../../data/demoData';

export interface SoldItem {
  productId: number;
  name: string;
  quantity: number;
  category: string;
}

interface DemoContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  cart: DemoCartItem[];
  addToCart: (product: DemoProduct) => string | null;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, delta: number) => string | null;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  sales: DemoSale[];
  soldItems: SoldItem[];
  completeSale: (paymentMethod: string) => string;
  salesCount: number;
  remainingSales: number;
  products: DemoProduct[];
  getProductByBarcode: (barcode: string) => DemoProduct | undefined;
  searchProducts: (query: string) => DemoProduct[];
  resetDemo: () => void;
  todayTotal: number;
  todayCount: number;
  lowStockCount: number;
  availableStock: (productId: number) => number;
  outOfStockMessage: string | null;
  clearOutOfStockMessage: () => void;
}

const DemoContext = createContext<DemoContextType | null>(null);

const maxSales = 10;

function cloneProducts(): DemoProduct[] {
  return demoProducts.map((p) => ({ ...p }));
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState<DemoCartItem[]>([]);
  const [sales, setSales] = useState<DemoSale[]>([]);
  const [soldItems, setSoldItems] = useState<SoldItem[]>([]);
  const [products, setProducts] = useState<DemoProduct[]>(cloneProducts);
  const [lastSaleId, setLastSaleId] = useState(1000);
  const [outOfStockMessage, setOutOfStockMessage] = useState<string | null>(null);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }, []);

  const availableStock = useCallback(
    (productId: number) => {
      const product = products.find((p) => p.id === productId);
      if (!product) return 0;
      const inCart = cart
        .filter((item) => item.product.id === productId)
        .reduce((sum, item) => sum + item.quantity, 0);
      return Math.max(0, product.stock - inCart);
    },
    [products, cart]
  );

  const addToCart = useCallback(
    (product: DemoProduct): string | null => {
      const currentStock = availableStock(product.id);
      if (currentStock <= 0) {
        const msg = 'No hay stock suficiente';
        setOutOfStockMessage(msg);
        return msg;
      }

      setCart((prev) => {
        const existing = prev.findIndex((item) => item.product.id === product.id);
        if (existing >= 0) {
          if (prev[existing].quantity >= product.stock) return prev;
          const updated = [...prev];
          updated[existing] = { ...updated[existing], quantity: updated[existing].quantity + 1 };
          return updated;
        }
        return [...prev, { product, quantity: 1, discount: 0 }];
      });
      return null;
    },
    [availableStock]
  );

  const removeFromCart = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback(
    (index: number, delta: number): string | null => {
      const item = cart[index];
      if (!item) return null;

      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        setCart((prev) => prev.filter((_, i) => i !== index));
        return null;
      }

      if (delta > 0 && newQty > item.product.stock) {
        const msg = 'No hay stock suficiente';
        setOutOfStockMessage(msg);
        return msg;
      }

      setCart((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], quantity: newQty };
        return updated;
      });
      return null;
    },
    [cart]
  );

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity - item.discount;
  }, 0);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const salesCount = sales.length;

  const today = new Date().toISOString().slice(0, 10);

  const todayTotal = sales
    .filter((s) => s.date.startsWith(today))
    .reduce((sum, s) => sum + s.total, 0);

  const todayCount = sales.filter((s) => s.date.startsWith(today)).length;

  const lowStockCount = products.filter((p) => p.stock <= p.minStock).length;

  const completeSale = useCallback(
    (paymentMethod: string): string => {
      if (salesCount >= maxSales) return 'Limite de ventas demo alcanzado';
      if (cart.length === 0) return 'Carrito vacio';

      const newId = lastSaleId + 1;
      setLastSaleId(newId);

      const itemsCount = cartItemCount;

      const newSale: DemoSale = {
        id: newId,
        date: new Date().toISOString().replace('T', ' ').slice(0, 16),
        items: itemsCount,
        total: cartTotal,
        paymentMethod,
      };

      setSales((prev) => [...prev, newSale]);

      const items: SoldItem[] = cart.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        category: item.product.category,
      }));
      setSoldItems((prev) => [...prev, ...items]);

      setProducts((prev) =>
        prev.map((p) => {
          const cartItem = cart.find((c) => c.product.id === p.id);
          if (cartItem) {
            return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
          }
          return p;
        })
      );

      clearCart();
      return `Venta #${newId} registrada`;
    },
    [salesCount, lastSaleId, cartItemCount, cartTotal, cart, clearCart]
  );

  const getProductByBarcode = useCallback(
    (barcode: string) => products.find((p) => p.barcode === barcode),
    [products]
  );

  const searchProducts = useCallback(
    (query: string) => {
      const q = query.toLowerCase();
      return products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.barcode.includes(q)
      );
    },
    [products]
  );

  const resetDemo = useCallback(() => {
    setCart([]);
    setSales([]);
    setSoldItems([]);
    setProducts(cloneProducts());
    setLastSaleId(1000);
  }, []);

  const clearOutOfStockMessage = useCallback(() => setOutOfStockMessage(null), []);

  return (
    <DemoContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        sales,
        soldItems,
        completeSale,
        salesCount,
        remainingSales: maxSales - sales.length,
        products,
        getProductByBarcode,
        searchProducts,
        resetDemo,
        todayTotal,
        todayCount,
        lowStockCount,
        availableStock,
        outOfStockMessage,
        clearOutOfStockMessage,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo debe usarse dentro de DemoProvider');
  return ctx;
}
