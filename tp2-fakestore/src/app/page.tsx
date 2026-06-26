import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 overflow-hidden w-full">
      
      {/* Auras de fondo (Optimizadas para no romper el renderizado) */}
      <div className="absolute top-10 left-10 md:left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 md:right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>

      {/* Partículas flotantes hechas 100% con Tailwind nativo */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full blur-[1px] animate-bounce"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-purple-400/60 rounded-full blur-[1px] animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400/60 rounded-full blur-[1px] animate-ping"></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-blue-500/40 rounded-full blur-[2px] animate-bounce"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        
        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl tracking-tight">
          Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">FakeStore</span>
        </h1>
        
        {/* Caja de texto (Glassmorphism seguro) */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 w-full bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/10">
          Tu tienda online de confianza. Encuentra los mejores productos en electrónica, joyería y ropa, consumidos directamente desde la API REST.
        </p>
        
        {/* Botón */}
        <Link 
          href="/productos" 
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1"
        >
          Explorar el Catálogo
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}