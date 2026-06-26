# 🛒 FakeStore E-commerce - Trabajo Práctico N° 2

## Descripción
Este proyecto es un simulador de tienda online desarrollado con el App Router de Next.js. Consume la FakeStore API para obtener un catálogo de productos reales e implementa un sistema de carrito de compras funcional utilizando Context API y persistencia de datos con LocalStorage. Todo el estilado visual y las animaciones fueron realizados de forma nativa con Tailwind CSS.

## Equipo
* **Integrantes:**
  - Ambrogio Francisco
  - Lacroix, Nicolas

## Requisitos Cumplidos
1. **Rutas y Layouts:** Implementación de rutas base (Home, Productos, Contacto), ruta anidada (`/productos/categorias`) y ruta dinámica (`/productos/[id]`). Toda la navegación utiliza el componente `<Link>`.
2. **Arquitectura de Componentes:** Separación estratégica entre lógicas de servidor y cliente.
   - *Server Components:* `ProductCard`, `Footer` y llamadas a la API (SEO optimizado).
   - *Client Components:* `CartIcon`, `AddToCartButton`, formulario de contacto y manejo de estado global.
3. **Estado Global y Persistencia:** Creación de un `CartContext` para el manejo del carrito de compras, sincronizado con el `localStorage` del navegador para evitar la pérdida de datos al recargar.
4. **Integración de API:** Consumo asíncrono de la FakeStore API (`https://fakestoreapi.com/products`) para renderizar el catálogo general y las vistas de detalle de cada producto.

## Tecnologías Utilizadas
* Next.js 14+ (App Router)
* React (Hooks, Context API)
* Tailwind CSS
* TypeScript

## Instrucciones para ejecutar en local
1. Clonar el repositorio:
   ```bash
    git clone git@github.com:FranAmbrogioItec/tp2_prog3.git
    ```

2. Instalar dependencias:
   ```bash
   npm install

3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.