
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [services, setServices] = useState([]);
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(product => product._id !== id);
                    setServices(remaining);

                })

        }
    }


    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `http://localhost:5000/service?email=${email}`;
            const { data } = await axios.get(url);
            setServices(data);
        }
        getServices();
    }, [user])

    return (


        <div className='container'>

            <div className='row'>
                {
                    services.map(product => <div key={product._id} className='product col col-12  col-md-6 col-lg-4 g-4'>
                        <div class="card " style={{ width: "18rem" }}>
                            <img src={product.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <h5>Price:{product.price}</h5>
                                <p>Quantity: {product.quantity}</p>
                                <h5>Supplier: {product.supplier}</h5>

                                <button onClick={() => handleDelete(product._id)} className='mt-3 bg-warning'>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>

        </div>
    );
};

export default MyItems;