export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-auto border-t border-gray-800">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} FakeStore E-commerce.</p>
                <p className="text-sm mt-2">Trabajo Práctico N° 2 - Componentes, Estado Global y APIs</p>
            </div>
        </footer>
    );
}