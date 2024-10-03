import React from 'react';
import './style.css'; // Import your CSS file
 // Import Boxicons

function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
