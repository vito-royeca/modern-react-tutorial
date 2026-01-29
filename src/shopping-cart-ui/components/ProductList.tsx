import type { IProduct } from "../IProduct.ts";
import { useProducts } from "../context/ProductContext.tsx";
import ProductCard from "./ProductCard.tsx";
import Spinner from "../../components/Spinner.tsx";

const ProductList = () => {
    const { products, loading, error } = useProducts();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            { loading && <Spinner color='#fff'/> }
            { error && <div className="error">Error: {error.message}</div> }

            { products.map((product: IProduct) => (
                <ProductCard 
                    key={product.id}
                    product={product} />
            ))}
        </div>
    );
}
 
export default ProductList;