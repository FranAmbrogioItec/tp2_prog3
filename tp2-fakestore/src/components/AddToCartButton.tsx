"use client";

import { useCart, Product } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className="w-full mt-4 bg-gray-900 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 shadow-sm"
        >
            Agregar al carrito
        </button>
    );
}