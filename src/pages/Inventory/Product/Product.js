import React from 'react';
import './product.css'

const Product = ({ product }) => {
    const { name, img, description, price, supplier, quantity } = product;
    return (
        <div className='single-item'>
            <img className='d-flex w-100 p-1' src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Supplier's name: {supplier}</p>
            <p><small>Description: {description}</small></p>
            <h5>Price: {price}</h5>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default Product;