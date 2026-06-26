import Link from 'next/link';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg text-white p-4 sticky top-0 z-50 border-b border-gray-800 shadow-xl">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        
        {/* Logo interactivo */}
        <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          Fake<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Store</span>
        </Link>
        
        {/* Enlaces de navegación */}
        <div className="flex gap-2 sm:gap-6 items-center font-medium">
          <Link 
            href="/productos" 
            className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out"
          >
            Productos
          </Link>
          <Link 
            href="/contacto" 
            className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out"
          >
            Contacto
          </Link>
          
          {/* Separador visual antes del carrito */}
          <div className="pl-2 sm:pl-4 border-l border-gray-700">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}