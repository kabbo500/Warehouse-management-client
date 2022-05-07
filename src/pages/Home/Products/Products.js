import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
const Products = ({ product }) => {
    const { _id, img, name, price, description, quantity, supplier } = product

    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product col col-12  col-md-6 col-lg-4 g-4'>
            <div class="card " style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h5>Price:{price}</h5>
                    <p>Quantity: {quantity}</p>
                    <h5>Supplier: {supplier}</h5>
                    <button onClick={() => navigateToCheckout(_id)} className='btn btn-primary'>Update:{name}</button>
                </div>
            </div>
        </div>

    );
};

export default Products;