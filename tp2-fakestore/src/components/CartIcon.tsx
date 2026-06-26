"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartIcon() {
  const { cart } = useCart();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link 
      href="/carrito" 
      className="group relative flex items-center justify-center bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-blue-500/50 px-4 py-2 rounded-xl font-bold shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-white"
    >
      <span className="text-xl group-hover:scale-110 transition-transform duration-300">🛒</span>
      <span className="ml-2 text-blue-400 group-hover:text-blue-300 transition-colors">
        {totalItems}
      </span>
    </Link>
  );
}