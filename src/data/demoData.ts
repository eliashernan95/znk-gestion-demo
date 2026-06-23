export interface DemoProduct {
  id: number;
  name: string;
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  category: string;
  brand: string;
  barcode: string;
  unit: string;
}

export interface DemoCategory {
  id: number;
  name: string;
  color: string;
}

export interface DemoCartItem {
  product: DemoProduct;
  quantity: number;
  discount: number;
}

export interface DemoSale {
  id: number;
  date: string;
  items: number;
  total: number;
  paymentMethod: string;
}

export interface DemoCashMovement {
  id: number;
  type: 'ingreso' | 'egreso';
  concept: string;
  amount: number;
  date: string;
}

export const demoProducts: DemoProduct[] = [
  { id: 1, name: 'Café en grano 500g', price: 1850, cost: 1200, stock: 18, minStock: 5, category: 'Almacén', brand: 'La Morenita', barcode: '7790001001001', unit: 'Unidad' },
  { id: 2, name: 'Leche entera 1L', price: 580, cost: 410, stock: 32, minStock: 10, category: 'Lácteos', brand: 'La Serenísima', barcode: '7790002002002', unit: 'Unidad' },
  { id: 3, name: 'Yerba mate 1kg', price: 1320, cost: 980, stock: 14, minStock: 8, category: 'Almacén', brand: 'Playadito', barcode: '7790003003003', unit: 'Unidad' },
  { id: 4, name: 'Azúcar 1kg', price: 720, cost: 550, stock: 25, minStock: 10, category: 'Almacén', brand: 'Ledesma', barcode: '7790004004004', unit: 'Unidad' },
  { id: 5, name: 'Aceite girasol 1.5L', price: 1680, cost: 1290, stock: 11, minStock: 5, category: 'Almacén', brand: 'Natura', barcode: '7790005005005', unit: 'Unidad' },
  { id: 6, name: 'Harina 0000 1kg', price: 450, cost: 310, stock: 20, minStock: 8, category: 'Almacén', brand: 'Morixe', barcode: '7790006006006', unit: 'Unidad' },
  { id: 7, name: 'Arroz largo fino 1kg', price: 890, cost: 650, stock: 16, minStock: 6, category: 'Almacén', brand: 'Gallo', barcode: '7790007007007', unit: 'Unidad' },
  { id: 8, name: 'Queso cremoso 250g', price: 1450, cost: 1100, stock: 9, minStock: 5, category: 'Lácteos', brand: 'La Paulina', barcode: '7790008008008', unit: 'Unidad' },
  { id: 9, name: 'Manteca 200g', price: 980, cost: 740, stock: 13, minStock: 5, category: 'Lácteos', brand: 'La Serenísima', barcode: '7790009009009', unit: 'Unidad' },
  { id: 10, name: 'Pan lactal 550g', price: 1100, cost: 820, stock: 7, minStock: 4, category: 'Panadería', brand: 'Fargo', barcode: '7790010001000', unit: 'Unidad' },
  { id: 11, name: 'Fideos spaghetti 500g', price: 620, cost: 440, stock: 22, minStock: 8, category: 'Almacén', brand: 'Matarazzo', barcode: '7790011001001', unit: 'Unidad' },
  { id: 12, name: 'Salsa de tomate 340g', price: 480, cost: 320, stock: 19, minStock: 8, category: 'Almacén', brand: 'Arcor', barcode: '7790012002002', unit: 'Unidad' },
  { id: 13, name: 'Jabón líquido 750ml', price: 1350, cost: 970, stock: 10, minStock: 3, category: 'Limpieza', brand: 'Ala', barcode: '7790013003003', unit: 'Unidad' },
  { id: 14, name: 'Detergente 500ml', price: 380, cost: 250, stock: 28, minStock: 6, category: 'Limpieza', brand: 'Magistral', barcode: '7790014004004', unit: 'Unidad' },
  { id: 15, name: 'Lavandina 1L', price: 350, cost: 210, stock: 24, minStock: 6, category: 'Limpieza', brand: 'Ayudín', barcode: '7790015005005', unit: 'Unidad' },
  { id: 16, name: 'Galletitas dulces 250g', price: 750, cost: 540, stock: 12, minStock: 5, category: 'Almacén', brand: 'Terrabusi', barcode: '7790016006006', unit: 'Unidad' },
  { id: 17, name: 'Gaseosa cola 2.25L', price: 1560, cost: 1180, stock: 15, minStock: 5, category: 'Bebidas', brand: 'Coca-Cola', barcode: '7790017007007', unit: 'Unidad' },
  { id: 18, name: 'Agua mineral 2L', price: 680, cost: 420, stock: 30, minStock: 8, category: 'Bebidas', brand: 'Villavicencio', barcode: '7790018008008', unit: 'Unidad' },
  { id: 19, name: 'Cerveza 1L', price: 1250, cost: 890, stock: 17, minStock: 6, category: 'Bebidas', brand: 'Quilmes', barcode: '7790019009009', unit: 'Unidad' },
  { id: 20, name: 'Papel higiénico 4u', price: 1150, cost: 830, stock: 8, minStock: 4, category: 'Limpieza', brand: 'Elite', barcode: '7790020002000', unit: 'Unidad' },
];

export const demoCategories: DemoCategory[] = [
  { id: 1, name: 'Almacén', color: '#4c6ef5' },
  { id: 2, name: 'Lácteos', color: '#12b886' },
  { id: 3, name: 'Bebidas', color: '#f59e0b' },
  { id: 4, name: 'Limpieza', color: '#e64980' },
  { id: 5, name: 'Panadería', color: '#7950f2' },
];

export const demoSales: DemoSale[] = [
  { id: 1001, date: '2026-06-23 15:30', items: 3, total: 4320, paymentMethod: 'Efectivo' },
  { id: 1002, date: '2026-06-23 14:15', items: 1, total: 1680, paymentMethod: 'Tarjeta' },
  { id: 1003, date: '2026-06-23 12:40', items: 5, total: 7150, paymentMethod: 'Efectivo' },
  { id: 1004, date: '2026-06-23 11:10', items: 2, total: 2560, paymentMethod: 'Transferencia' },
  { id: 1005, date: '2026-06-23 10:00', items: 4, total: 5490, paymentMethod: 'Efectivo' },
  { id: 1006, date: '2026-06-22 18:20', items: 2, total: 2930, paymentMethod: 'Tarjeta' },
  { id: 1007, date: '2026-06-22 17:00', items: 1, total: 1250, paymentMethod: 'Efectivo' },
  { id: 1008, date: '2026-06-22 15:45', items: 3, total: 3980, paymentMethod: 'QR Mercado Pago' },
];

export const demoCashMovements: DemoCashMovement[] = [
  { id: 1, type: 'ingreso', concept: 'Apertura de caja', amount: 20000, date: '2026-06-23 09:00' },
  { id: 2, type: 'ingreso', concept: 'Venta #1001', amount: 4320, date: '2026-06-23 15:30' },
  { id: 3, type: 'ingreso', concept: 'Venta #1002', amount: 1680, date: '2026-06-23 14:15' },
  { id: 4, type: 'egreso', concept: 'Pago a proveedor', amount: 5000, date: '2026-06-23 13:00' },
  { id: 5, type: 'ingreso', concept: 'Venta #1003', amount: 7150, date: '2026-06-23 12:40' },
];

export const paymentMethods = ['Efectivo', 'Tarjeta', 'Transferencia', 'QR Mercado Pago', 'Mixto'];

export const maxProducts = 20;
export const maxSales = 10;
