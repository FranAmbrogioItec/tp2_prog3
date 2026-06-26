import { Product } from '@/context/CartContext';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';

// Función robusta con manejo de errores para evitar el fallo de JSON
async function getProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) throw new Error('Error de red al cargar el producto');

    // Leemos la respuesta como texto primero para asegurarnos de que no esté vacía
    const text = await res.text();
    if (!text) throw new Error('La API devolvió una respuesta vacía');

    return JSON.parse(text);
  } catch (error) {
    console.error("Error obteniendo el producto:", error);
    return null; // Si falla, devolvemos null para mostrar un mensaje amigable
  }
}

// En versiones nuevas de Next.js, params puede comportarse como una Promesa.
// Extraemos el id de forma segura.
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: (Product & { description: string }) | null = await getProduct(id);

  // Manejo de error visual si el producto no carga o el JSON falla
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 mt-6">
        <h2 className="text-3xl font-bold text-white mb-4">Ups, no pudimos cargar este producto</h2>
        <p className="text-gray-400 mb-6">Hubo un problema de conexión con la API.</p>
        <Link href="/productos" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">
          &larr; Volver al catálogo
        </Link>
      </div>
    );
  }

  // Vista del producto con diseño Dark Premium
  return (
    <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 md:p-12 mt-6">
      <Link href="/productos" className="text-blue-400 hover:text-blue-300 hover:underline mb-8 inline-block font-medium transition-colors">
        &larr; Volver al catálogo
      </Link>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Imagen: Fondo blanco para mantener el contraste del producto */}
        <div className="md:w-1/2 flex justify-center items-center bg-white p-8 border border-gray-200 rounded-3xl shadow-inner">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Detalles del Producto */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <span className="text-sm text-blue-400 uppercase tracking-wider font-bold mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            {product.title}
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            {product.description}
          </p>
          <p className="text-5xl font-black text-white mb-10 tracking-tight">
            ${product.price.toFixed(2)}
          </p>

          <div className="w-full md:w-2/3">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}