import React from "react";

function Register(){
    return (
        <div>
            <form action="action_page.php">
        <div class="container">
          <h1><span>Re</span>gister</h1>
          <p>Please fill in this form to create an account.</p>
          <div class="box">
          <hr />

          <label for="FirstName"><b>First Name</b></label>
          <input type="text" placeholder="Enter First Name" name="Firstname" id="First" required />
      
          <label for="Last Name"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" name="LastName" id="Last" required />

          <label for="age"><b>Age</b></label>
          <input type="number" placeholder="Enter Age" name="age" id="Age" required />

          <label for="uName"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uName" id="uName" required />
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
      
          <label for="pswConfrim"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="pswConfrim" id="pswConfrim" required />
          <hr />
          </div>
      
          <button type="submit" class="registerbtn">Register</button>
        </div>
      
        <div class="container signin">
          <p>Already have an account? <a href="insightfullyfit\src\components\Login.js">Login</a>.</p>
        </div>
      </form>
        </div>
    )
}

export default Register;