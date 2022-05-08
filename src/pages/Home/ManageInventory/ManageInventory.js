import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import MyItems from '../../MyItems/MyItems';


const ManageInventory = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/product/${id}`)
    }


    //delete handle
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://sleepy-stream-54562.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })

        }
    }

    return (

        <div>
            <div className='container'>
                <h1 className='text-primary text-center mt-4'>Products</h1>
                <div className='row'>
                    {
                        products.map(product => <div key={product._id} className='product col col-12  col-md-6 col-lg-4 g-4'>
                            <div class="card " style={{ width: "18rem" }}>
                                <img src={product.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <h5>Price:{product.price}</h5>
                                    <p>Quantity: {product.quantity}</p>
                                    <h5>Supplier: {product.supplier}</h5>
                                    <button onClick={() => navigateToCheckout(product._id)} className='btn btn-primary'>Update:{product.name}</button>
                                    <br />
                                    <button onClick={() => handleDelete(product._id)} className='mt-3 bg-warning'>Delete</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    <MyItems></MyItems>
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