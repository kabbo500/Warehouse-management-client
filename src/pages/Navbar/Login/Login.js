import React from 'react';

const Login = () => {
    return (
        <div>
            <h3> Please login</h3>

            <form>

                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;