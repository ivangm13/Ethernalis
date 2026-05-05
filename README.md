# 🚀 ProductName — Landing Page Angular

Proyecto Angular 17 con routing, diseño moderno y sistema de variables CSS completamente personalizable.

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Barra de navegación responsive
│   │   ├── footer/          ← Pie de página con links
│   │   └── product-card/    ← Card reutilizable para productos
│   ├── pages/
│   │   ├── home/            ← Landing page (hero + features + cards)
│   │   └── about/           ← Página de la marca
│   ├── app.component.ts     ← Componente raíz
│   ├── app.config.ts        ← Configuración (providers, animaciones)
│   └── app.routes.ts        ← Rutas de la aplicación
├── styles.scss              ← ⭐ VARIABLES GLOBALES — Personaliza aquí
└── index.html               ← Fuentes y meta
```

---

## ⚡ Instalación y ejecución

```bash
# 1. Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
ng serve

# 4. Abrir en el navegador
# http://localhost:4200
```

---

## 🎨 Cómo personalizar los colores y estilos

Abre `src/styles.scss`. Al inicio encontrarás el bloque `:root { ... }` con **todas las variables CSS**:

```scss
:root {
  // --- COLORES ---
  --color-bg:           #0a0a0f;    ← Fondo principal (oscuro)
  --color-accent:       #7c6dfa;    ← Color de acento (morado)
  --color-secondary:    #fa6d8a;    ← Color secundario (rosa)
  --color-text:         #f0f0f8;    ← Color del texto principal

  // --- TIPOGRAFÍA ---
  --font-display: 'Syne', sans-serif;    ← Fuente para títulos
  --font-body:    'DM Sans', sans-serif; ← Fuente para texto

  // --- y muchas más...
}
```

**Para tema claro**, cambia:
```scss
--color-bg:       #ffffff;
--color-bg-alt:   #f8f8fc;
--color-text:     #0a0a0f;
```

---

## 📦 Añadir tus productos reales

Edita el array `products` en `src/app/pages/home/home.component.ts`:

```typescript
products: ProductCard[] = [
  {
    id: 1,
    title: 'Mi Producto',
    subtitle: 'Categoría',
    description: 'Descripción del producto...',
    imagePlaceholder: 'https://midominio.com/imagen.jpg',  // ← URL real
    badge: 'Novedad',    // opcional
    price: '49 €',       // opcional
    tag: 'Nuevo'         // opcional
  },
  // ...
];
```

---

## 🗺️ Añadir nuevas rutas

Edita `src/app/app.routes.ts`:

```typescript
export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  // Añade aquí tus nuevas rutas:
  { path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
];
```

---

## 🏗️ Build para producción

```bash
ng build --configuration production
# Los archivos se generan en /dist/product-landing
```

---

## 📝 Personalización rápida — Checklist

- [ ] Cambiar "ProductName" por el nombre de tu marca (buscar y reemplazar en todo el proyecto)
- [ ] Actualizar colores en `src/styles.scss` → `:root`
- [ ] Sustituir fuentes en `src/index.html` y en `--font-display` / `--font-body`
- [ ] Añadir imágenes reales en el array `products` de `home.component.ts`
- [ ] Rellenar la sección About con la info real de tu equipo
- [ ] Actualizar links del footer y redes sociales
- [ ] Añadir el favicon real en `src/favicon.ico`
- [ ] Configurar el email de contacto en `footer.component.ts`
