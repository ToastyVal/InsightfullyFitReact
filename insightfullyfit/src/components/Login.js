import React from "react";
import { insightfullyfitRef } from '../firebase'; 

function Login() {
  return (
    <div class="container">
      <form action="#">
        <div class="title"><h1>Login</h1></div>
        <div class="input-box">
          <input type="text" placeholder="Enter Your Email" required />
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div class="underline"></div>
        </div>
        <div class="input-box button">
          <input type="submit" value="Continue" />
        </div>
      </form>
      <div>
        <a href="#">Login</a>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>
      <div class="container">
        <a type="button" class="cancelbtn" >
          Cancel
        </a>
        <span id="register">
          Need and account?<a>Register.</a>
        </span>
        <span class="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </div>
  );
}

export default Login;
