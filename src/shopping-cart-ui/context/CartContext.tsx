import { createContext, useContext, useState } from "react";
import type { IProduct } from "../IProduct";

interface CartContextType {
    cart: IProduct[];
    setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
    addToCart: (product: IProduct) => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
    addToCart: () => {},
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

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };