"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Tipados para TypeScript
export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false); // Para evitar problemas de hidratación en Next.js

    // 1. Persistencia: Recuperar el carrito de LocalStorage al cargar la app
    useEffect(() => {
        const savedCart = localStorage.getItem('fakeStoreCart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error("Error al leer el carrito:", error);
            }
        }
        setIsLoaded(true);
    }, []);

    // 2. Persistencia: Guardar en LocalStorage cada vez que el carrito cambie
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('fakeStoreCart', JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    // Funciones globales del carrito
    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingProduct = prev.find(item => item.id === product.id);
            if (existingProduct) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook para usar el carrito fácilmente
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
}