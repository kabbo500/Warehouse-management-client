import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add new Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' type="email" value={user.email} {...register("email")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;