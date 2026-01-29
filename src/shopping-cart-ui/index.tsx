import './style.css';
import Header from "./components/Header";
import ProductList from './components/ProductList';

const ShoppingCartUI = () => {
    return (
        <>
            <Header />
            <div className='min-h-screen p-6 bg-gray-100'>
                <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
                <ProductList />
            </div>
        </>
    );
}
 
export default ShoppingCartUI;