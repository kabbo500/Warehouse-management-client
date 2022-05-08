
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/product/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://sleepy-stream-54562.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })

        }
    }


    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `https://sleepy-stream-54562.herokuapp.com/product?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProducts(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getServices();
    }, [user])

    return (


        <div className='container'>

            <div className='row'>
                {
                    products.map(product => <div key={product._id} className='product col col-12  col-md-6 col-lg-4 g-4'>
                        <div class="card " style={{ width: "18rem" }}>
                            <img src={product.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <h5>Price:{product.price}</h5>
                                <p>Quantity: {product.quantity}</p>
                                <h5>Supplier: {product.supplier}</h5>
                                <button onClick={() => navigateToCheckout(product._id)} className='btn btn-primary'>Update:{product.name}</button>
                                <br />
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