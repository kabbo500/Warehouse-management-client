import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

const Product = ({ product }) => {
    const { id, name, img, description, price, supplier, quantity } = product;
    const navigate = useNavigate();

    const handleProductUpdate = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='single-item'>
            <img className='d-flex w-100 p-1' src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Supplier's name: {supplier}</p>
            <p><small>Description: {description}</small></p>
            <h5>Price: {price}</h5>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleProductUpdate(id)} className='btn btn-success'>Update: {name}</button>
        </div>
    );
};

export default Product;