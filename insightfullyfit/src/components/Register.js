import React from "react";

function Register(){
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>Create a Username:</label>
                <input type='text' id='makeUname' required />
                <br />
                <label>Create a Password:</label>
                <input type='password' id='createPword' required />
                <br />
                <label>Confirm Password</label>
                <input type='password' id='confirmPword' required />
                <br />
                <label>Email:</label>
                <input type='email' id='enterEmail' required />
                <br /> 
                <button type='btn' id='createAcc'>Create Account</button>
            </form>
        </div>
    )
}

export default Register;