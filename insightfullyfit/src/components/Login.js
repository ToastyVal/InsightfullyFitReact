import React from "react";

function Login() {
    
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username:</label>
                <input type='text' id='uName' required />
                <label>Password</label>
                <input type='password' id="pWord" required />
                <button type="btn" id='login'>Login</button>
            </form>
        </div>
    )
}

export default Login;