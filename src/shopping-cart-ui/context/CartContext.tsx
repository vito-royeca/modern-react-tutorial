import { createContext, useContext, useState } from "react";
import type { IProduct } from "../IProduct";

interface CartContextType {
    cart: IProduct[];
    setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };