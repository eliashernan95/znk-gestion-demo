# ZNK Gestion — Demo pública

Demo interactiva de **ZNK Gestion**, un sistema de gestión y ventas para comercios.

**[Probar demo online →](https://github.com)** *(reemplazá con tu URL de GitHub Pages)*

---

## ¿Qué es ZNK Gestion?

ZNK Gestion es un sistema completo para la administración de comercios minoristas. Está pensado para:

- **Kioscos y almacenes**
- **Verdulerías y fruterías**
- **Ferreterías**
- **Limpieza y perfumería**
- **Indumentaria**
- **Comercios generales**

Incluye punto de venta con lector de código de barras, control de stock, caja diaria, reportes, gestión de precios, facturación, importación desde Excel, y mucho más.

---

## Vista previa

![Landing de ZNK Gestion](screenshots/landing.png)

| Punto de venta | Dashboard | Productos |
|:---:|:---:|:---:|
| ![POS](screenshots/pos.png) | ![Dashboard](screenshots/dashboard.png) | ![Productos](screenshots/products.png) |

*(Agregá screenshots reales en la carpeta `screenshots/`)*

---

## Funciones principales

- **Punto de venta** — Búsqueda por código de barras, carrito de compras, múltiples medios de pago.
- **Productos y stock** — Catálogo con categorías, marcas y proveedores. Alertas de stock bajo.
- **Caja diaria** — Apertura, cierre, registro de ingresos y egresos.
- **Reportes** — Ventas diarias, productos más vendidos, rentabilidad, rotación.
- **Usuarios y roles** — Permisos granulares por puesto de trabajo.
- **Importar Excel** — Carga masiva de productos desde planillas.
- **Modo oscuro** — Interfaz clara y oscura, adaptable al entorno.
- **Multi-rubro** — Plantillas precargadas según el tipo de comercio.

---

## Demo en vivo

La demo de esta carpeta es una versión **totalmente independiente** del sistema real:

- ✅ **No requiere registro** — entrás directo al sistema.
- ✅ **Datos ficticios** — productos, ventas y clientes de prueba.
- ✅ **Modo oscuro** — alternás con un clic.
- ✅ **Sin backend** — todo funciona en el navegador.

### Limitaciones de la demo

| Recurso | Límite |
|:---|---:|
| Productos | 20 |
| Ventas | 10 |
| Datos reales | No |
| Claves | No |
| Base de datos | No |
| Funciones sensibles | Deshabilitadas |

La demo muestra la **experiencia de uso**, no la funcionalidad completa. El sistema real incluye backup, facturación AFIP, impresión de tickets, y más.

---

## Tecnología

| Capa | Tecnología |
|:---|:---|
| Frontend | React + TypeScript + Vite |
| Estilos | Tailwind CSS |
| Gráficos | Recharts |
| Íconos | Lucide React |
| Backend (versión completa) | Node.js + Express + Prisma |
| Base de datos (versión completa) | SQLite |
| Escritorio (versión completa) | Electron |

---

## Correr la demo localmente

```bash
cd demo-publica
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

Para generar una build de producción:

```bash
npm run build
npm run preview
```

---

## Estructura de archivos

```
demo-publica/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── .gitignore
├── README.md
├── screenshots/
│   ├── landing.png
│   ├── pos.png
│   ├── dashboard.png
│   └── products.png
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   └── index.css
    ├── components/
    │   ├── landing/
    │   │   ├── Navbar.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── FeatureCards.tsx
    │   │   ├── ScreenshotsSection.tsx
    │   │   └── FooterSection.tsx
    │   └── demo/
    │       ├── DemoStore.tsx
    │       └── DemoLayout.tsx
    ├── pages/
    │   ├── LandingPage.tsx
    │   ├── DemoApp.tsx
    │   └── demo/
    │       ├── DemoPOS.tsx
    │       ├── DemoProducts.tsx
    │       └── DemoDashboard.tsx
    └── data/
        └── demoData.ts
```

---

## Licencia

Este proyecto es software privado. La demo pública se comparte con fines de demostración y evaluación.
