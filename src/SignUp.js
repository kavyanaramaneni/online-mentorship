import React from 'react';
import './style.css'; // Import your CSS file

function SignUp() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <i className='bx bxs-envelope'></i>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
