import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Bienvenido a <span className="text-blue-600">FakeStore</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Tu tienda online de confianza. Encuentra los mejores productos en electrónica, joyería y ropa, consumidos directamente desde la API REST.
      </p>
      <Link 
        href="/productos" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Explorar el Catálogo
      </Link>
    </div>
  );
}