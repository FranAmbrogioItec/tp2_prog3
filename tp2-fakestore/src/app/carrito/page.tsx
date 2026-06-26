"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calcular el precio total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Vista si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <span className="text-6xl mb-6 drop-shadow-lg">🛒</span>
        <h2 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h2>
        <Link href="/productos" className="text-blue-400 hover:text-blue-300 hover:underline font-medium text-lg transition-colors">
          &larr; Volver al catálogo para comprar
        </Link>
      </div>
    );
  }

  // Vista con productos (Diseño Dark Premium)
  return (
    <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-700/50 mt-6">
      <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700/50 pb-4">Carrito de Compras</h1>
      
      <div className="space-y-6 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-800 pb-6 gap-4 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
            <div className="flex items-center gap-6 w-full sm:w-auto">
              {/* Contenedor de la imagen con fondo blanco para que resalten los productos */}
              <div className="w-24 h-24 flex-shrink-0 bg-white p-2 border border-gray-200 rounded-xl shadow-inner">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 text-lg line-clamp-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium">Cantidad: <span className="text-gray-200">{item.quantity}</span></p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0">
              <p className="font-black text-blue-400 text-2xl tracking-tight">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-300 font-semibold text-sm transition-all px-4 py-2 border border-red-500/30 hover:bg-red-500/10 rounded-lg"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Total y Botones de Acción */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-inner">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg text-gray-400 font-medium mb-1">Total a pagar:</p>
          <p className="text-5xl font-black text-white tracking-tight">${total.toFixed(2)}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={clearCart}
            className="w-full sm:w-auto px-6 py-4 border border-gray-600 text-gray-300 rounded-xl font-bold hover:bg-gray-700 hover:text-white transition-colors"
          >
            Vaciar Carrito
          </button>
          <button 
            onClick={() => alert("¡Gracias por probar el simulador!")}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold px-8 py-4 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}