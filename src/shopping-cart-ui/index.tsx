import {useEffect, useState} from 'react';

import './style.css';
import ProductList from './components/ProductList';
import Spinner from '../components/Spinner';
import type { IProduct } from './IProduct';

const ShoppingCartUI = () => {
    return ( 
        <div className='min-h-screen p-6 bg-gray-100'>
            <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
            <ProductList />
        </div>
    );
}
 
export default ShoppingCartUI;