import type { IProduct } from "../IProduct.ts";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";
// import Spinner from "../../../components/Spinner";

const ProductList = () => {
    const { products, loading, error } = useProducts();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* { loading && <Spinner color='#fff'/> } */}
            { loading && (<p>Loading products...</p>) }
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