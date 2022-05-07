import React from 'react';

const NewItem = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const item = { name, email };

        //send data to the server
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })

    }
    return (
        <div className='container d-flex justify-content-center'>
            <div>
                <h2 >Please add new item</h2>
                <form onSubmit={handleAddItem}>

                    <input className='mb-3' type="text" name='name' placeholder='Name' required />
                    <br />
                    <input className='mb-3' type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default NewItem;