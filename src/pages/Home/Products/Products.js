import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useProducts([]);



    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-4'>Products</h1>
            <div className='row'>
                {
                    products.slice(0, 6).map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;