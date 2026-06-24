export default function CategoriasPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Categorías</h1>
      <p className="text-gray-600">
        Selecciona una categoría en el menú lateral para filtrar el catálogo de productos. 
        Esta vista demuestra el funcionamiento de las <strong>rutas anidadas</strong> compartiendo el mismo Layout.
      </p>
    </div>
  );
}