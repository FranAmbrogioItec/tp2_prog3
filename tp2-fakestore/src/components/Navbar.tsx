import Link from 'next/link';
import CartIcon from './CartIcon';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors">
                    FakeStore<span className="text-blue-500">.</span>
                </Link>
                <div className="flex gap-6 items-center font-medium">
                    <Link href="/productos" className="hover:text-blue-400 transition-colors">
                        Productos
                    </Link>
                    <Link href="/contacto" className="hover:text-blue-400 transition-colors">
                        Contacto
                    </Link>
                    <CartIcon />
                </div>
            </div>
        </nav>
    );
}