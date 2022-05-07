import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateForm from './UpdateForm/UpdateForm';
import CheckoutForm from './UpdateForm/UpdateForm';

const Update = () => {
    const { productId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h2>Update Your Product</h2>
                    <h4 className='d-flex justify-content-center'> {service.name}</h4>
                </div>
            </div>
            <UpdateForm></UpdateForm>
        </div>
    );
};

export default Update;