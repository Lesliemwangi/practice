import React from 'react';

function Login() {
  return (
    <div className='main-login'>
        <div className='login-contain'>
      <div>Login Form</div>
      <button onClick={() => console.log('login')}>Login</button>
      <div>Forgot Password?</div>
      <div>Do not have an account?</div>
      <button onClick={() => console.log('sign up')}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
