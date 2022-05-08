import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import Products from '../Products/Products';

const ManageInventory = () => {

    const [products, setProducts] = useProducts([]);
    return (

        <div>
            <div className='container'>
                <h1 className='text-primary text-center mt-4'>Products</h1>
                <div className='row'>
                    {
                        products.map(product => <Products key={product._id} product={product}></Products>)
                    }

                </div>

            </div>
            <div className='d-flex justify-content-center mt-4'>
                <p className='d-inventory'>
                    <Link style={{ textDecoration: 'none' }} as={Link} to="/addItem">Add New Item</Link>
                </p>
            </div>
        </div>
    );

};

export default ManageInventory;