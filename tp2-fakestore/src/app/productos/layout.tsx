export default function ProductosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar para el layout anidado */}
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
                <h2 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">Categorías</h2>
                <ul className="space-y-3 text-gray-600 font-medium">
                    <li className="hover:text-blue-500 cursor-pointer transition-colors">Ver Todo</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors">Electrónica</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors">Joyería</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors">Ropa de Hombre</li>
                    <li className="hover:text-blue-500 cursor-pointer transition-colors">Ropa de Mujer</li>
                </ul>
            </aside>

            {/* Contenido principal (los productos renderizados por page.tsx) */}
            <section className="w-full md:w-3/4">
                {children}
            </section>
        </div>
    );
}