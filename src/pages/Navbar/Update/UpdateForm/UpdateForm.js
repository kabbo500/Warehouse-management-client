import React from 'react';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './UpdateForm.css'

const UpdateForm = () => {

    const handleUpdate = () => {
        toast(" Thanks for taken our Service !", {
            position: "top-center"
        });


    }
    return (
        <div>
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