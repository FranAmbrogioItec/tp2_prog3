"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartIcon() {
  const { cart } = useCart();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link 
      href="/carrito" 
      className="bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-md text-sm font-bold flex items-center shadow-sm text-white"
    >
      🛒 <span className="ml-2">{totalItems}</span>
    </Link>
  );
}