import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register </h3>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;