import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import './Home.css'
import useProducts from '../../hooks/useProducts';
import Product from './Product/Product';


const Home = () => {
    const [products, setProducts] = useProducts([]);
    return (
        <div>
            <Banner></Banner>

            <div className='container'>
                <h1 className='text-primary text-center mt-4'>Products</h1>
                <div className='row'>
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }

                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <p className='d-inventory'>
                    <Link style={{ textDecoration: 'none' }} as={Link} to="/manageinventory">Manage Inventory</Link>
                </p>
            </div>
        </div>
    );
};

export default Home;