import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Error al cargar los productos');
  return res.json();
}

export default async function ProductosPage() {
  const productos: Product[] = await getProducts();

  return (
    <div>
      {/* Textos corregidos para modo oscuro */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight">Catálogo Completo</h1>
        <p className="text-gray-400 mt-2">Explora nuestra colección de productos consumidos desde la API.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}