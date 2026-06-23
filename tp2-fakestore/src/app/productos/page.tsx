import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';

// Función para obtener los datos de la FakeStore API
async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Error al cargar los productos');
    }

    return res.json();
}

export default async function ProductosPage() {
    const productos: Product[] = await getProducts();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Catálogo Completo</h1>
                <p className="text-gray-500 mt-2">Explora nuestra colección de productos consumidos desde la API.</p>
            </div>

            {/* Grilla de productos responsiva usando Tailwind */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productos.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </div>
    );
}