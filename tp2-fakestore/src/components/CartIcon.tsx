"use client";

import { useCart } from '@/context/CartContext';

export default function CartIcon() {
    const { cart } = useCart();

    // Calculamos la cantidad total de productos en el carrito
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="bg-blue-600 px-3 py-1 rounded-md text-sm font-bold flex items-center shadow-sm">
            🛒 <span className="ml-2">{totalItems}</span>
        </div>
    );
}