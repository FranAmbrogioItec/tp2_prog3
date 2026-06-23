import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { Product } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col h-full hover:shadow-md transition-shadow">
            {/* Contenedor de la imagen */}
            <div className="relative h-48 w-full mb-4 bg-white rounded-md p-2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Información del producto */}
            <div className="flex flex-col flex-grow">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                    {product.category}
                </span>

                {/* Enlace a la ruta dinámica que haremos después */}
                <Link href={`/productos/${product.id}`}>
                    <h3 className="font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors mb-2">
                        {product.title}
                    </h3>
                </Link>

                <p className="text-2xl font-extrabold text-gray-900 mt-auto pt-4">
                    ${product.price.toFixed(2)}
                </p>

                {/* Componente de cliente inyectado en componente de servidor */}
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}