import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { Product } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-700/50 p-5 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
      
      {/* Imagen con fondo blanco para que resalte limpio */}
      <div className="relative h-56 w-full mb-5 bg-white rounded-2xl p-4 shadow-inner">
        <img 
          src={product.image} 
          alt={product.title} 
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Información del producto */}
      <div className="flex flex-col flex-grow">
        <span className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-2">
          {product.category}
        </span>
        
        <Link href={`/productos/${product.id}`}>
          <h3 className="font-bold text-gray-100 line-clamp-2 hover:text-blue-400 transition-colors mb-2 text-lg">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-3xl font-black text-white mt-auto pt-4 mb-5 tracking-tight">
          ${product.price.toFixed(2)}
        </p>
        
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}