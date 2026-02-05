import { createContext, useContext, useEffect, useState } from "react";
import type { IProduct } from "../IProduct";

interface ProductContextType {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    loading: boolean;
    error: Error | null;
}

const ProductContext = createContext<ProductContextType>({
    products: [],
    setProducts: () => {},
    loading: true,
    error: null,
});

const ProductProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (e: Error | any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, error, setProducts }}>
            { children }
        </ProductContext.Provider>
    );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
