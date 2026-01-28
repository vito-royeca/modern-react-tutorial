import {useEffect, useState} from 'react';

import './style.css';
import Spinner from '../components/Spinner';

const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

const ShoppingCartUI = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
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
        <div className='min-h-screen p-6 bg-gray-100'>
            <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

            { loading && <Spinner color='#fff'/> }
            { error && <div className="error">Error: {error}</div> }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                { products.map((product: any) => (
                    <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
                        <img 
                            src={product.image}
                            alt={product.name}
                            className="h-40 object-cover rounded mb-4"/>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button> */}
                    </div>
                ))}

            </div>
        </div>
    );
}
 
export default ShoppingCartUI;