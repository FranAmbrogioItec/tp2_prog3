import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Home */}
                <Link href="/" className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors">
                    FakeStore<span className="text-blue-500">.</span>
                </Link>

                {/* Enlaces de navegación */}
                <div className="flex gap-6 items-center font-medium">
                    <Link href="/productos" className="hover:text-blue-400 transition-colors">
                        Productos
                    </Link>
                    <Link href="/contacto" className="hover:text-blue-400 transition-colors">
                        Contacto
                    </Link>

                    {/* Placeholder para el CartIcon para dsp */}
                    <div className="bg-blue-600 px-3 py-1 rounded-md text-sm font-bold">
                        🛒 0
                    </div>
                </div>
            </div>
        </nav>
    );
}