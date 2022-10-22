import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss";
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }catch(err){
      setErr(true);
      console.log(err);
    }  
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Majja Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password"  placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link> </p>
        <h4>Test Email Id : jeffbezos@gmail.com / billgates@gmail.com</h4>
        <h4>Test Password : 12345678</h4>
      </div>
    </div>
  )
}

export default Login;