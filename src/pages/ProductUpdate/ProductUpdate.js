import React from 'react';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { productId } = useParams();
    return (
        <div>
            <h1>ProductUpdate:{productId}</h1>
        </div>
    );
};

export default ProductUpdate;