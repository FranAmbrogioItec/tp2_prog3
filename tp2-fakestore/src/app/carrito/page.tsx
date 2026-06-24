"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <span className="text-6xl mb-4">🛒</span>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Tu carrito está vacío
        </h2>
        <Link
          href="/productos"
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-lg"
        >
          &larr; Volver al catálogo para comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
        Carrito de Compras
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-gray-500">
                Cantidad: {item.quantity}
              </p>

              <p className="text-blue-600 font-bold">
                ${item.price}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="text-2xl font-bold">
            Total: ${total.toFixed(2)}
          </p>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <button
            onClick={clearCart}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Vaciar carrito
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}