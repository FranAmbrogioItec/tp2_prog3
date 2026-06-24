import { Product } from '@/context/CartContext';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';

// Función para obtener un producto específico
async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Error al cargar el producto');
  }

  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product & { description: string; category: string } =
    await getProduct(params.id);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
      <Link
        href="/productos"
        className="text-blue-500 hover:underline mb-6 inline-block font-medium"
      >
        &larr; Volver al catálogo
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

        {/* Información */}
        <div className="md:w-1/2">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-4">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>

          <p className="text-green-600 font-medium mb-6">
            ✓ Disponible en stock
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}