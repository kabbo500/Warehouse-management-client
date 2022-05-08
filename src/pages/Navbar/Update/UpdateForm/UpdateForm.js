import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductUpdate from '../../../../hooks/useProductUpdate';

import './UpdateForm.css'

const UpdateForm = () => {
    const { productId } = useParams();
    const [service] = useProductUpdate(productId);

    const handleUpdate = () => {
        toast(" Thanks for taken our Service !", {
            position: "top-center"
        });


    }
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h2>Update Your Product</h2>
                    <h4 className='d-flex justify-content-center'> {service.name}</h4>
                </div>
            </div>
            <div className='update-btn container w-50 mt-5'>
                <button className=' btn-primary w-50' onClick={handleUpdate} >Delivery</button>

            </div>
            <div className='mt-5 d-flex justify-content-center'>
                <form>
                    <input type="number" name="" id="" required />
                    <input type="button" value="Increase Quantity" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateForm;