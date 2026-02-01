import './style.css';

// Contexts
import { CartProvider } from "./context/CartContext"
import { ProductProvider } from "./context/ProductContext"

// Components
import ContentWrapper from '~/routes/components/ContentWrapper';
import Header from "./components/Header";
import ProductList from './components/ProductList';

const ShoppingCartUI = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <ContentWrapper>
                    <Header />
                    <div className='min-h-screen p-6 bg-gray-100'>
                        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
                        <ProductList />
                    </div>
                </ContentWrapper>
            </CartProvider>
        </ProductProvider>
    );
}
 
export default ShoppingCartUI;