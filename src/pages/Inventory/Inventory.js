import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Inventory.css'
import Product from './Product/Product';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>Models</h1>
            <div className='product'>
                {
                    products.slice(0, 6).map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;