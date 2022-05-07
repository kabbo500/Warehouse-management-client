import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateForm from './UpdateForm/UpdateForm';
import CheckoutForm from './UpdateForm/UpdateForm';

const Update = () => {
    const { productId } = useParams();
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h2>Update Your Product</h2>
                    <h4 className='d-flex justify-content-center'>Product Id: {productId}</h4>
                </div>
            </div>
            <UpdateForm></UpdateForm>
        </div>
    );
};

export default Update;