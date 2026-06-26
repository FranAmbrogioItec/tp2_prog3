export default function ProductosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col md:flex-row gap-8 mt-6">
            {/* Sidebar con estilo Dark Premium */}
            <aside className="w-full md:w-1/4 bg-gray-900/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-700/50 h-fit">
                <h2 className="font-bold text-xl mb-4 text-white border-b border-gray-700/50 pb-3">Categorías</h2>
                <ul className="space-y-2 text-gray-400 font-medium">
                    <li className="hover:text-blue-400 hover:bg-white/[0.02] p-2 rounded-lg -ml-2 cursor-pointer transition-all">Ver Todo</li>
                    <li className="hover:text-blue-400 hover:bg-white/[0.02] p-2 rounded-lg -ml-2 cursor-pointer transition-all">Electrónica</li>
                    <li className="hover:text-blue-400 hover:bg-white/[0.02] p-2 rounded-lg -ml-2 cursor-pointer transition-all">Joyería</li>
                    <li className="hover:text-blue-400 hover:bg-white/[0.02] p-2 rounded-lg -ml-2 cursor-pointer transition-all">Ropa de Hombre</li>
                    <li className="hover:text-blue-400 hover:bg-white/[0.02] p-2 rounded-lg -ml-2 cursor-pointer transition-all">Ropa de Mujer</li>
                </ul>
            </aside>

            {/* Contenido principal */}
            <section className="w-full md:w-3/4">
                {children}
            </section>
        </div>
    );
}