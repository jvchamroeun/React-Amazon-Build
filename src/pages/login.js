import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { auth } from "../firebase"
import userEvent from '@testing-library/user-event';
import { Alarm } from '@mui/icons-material';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(auth => {
      navigate('/');
    }).catch(error => alert(error.message))
  }

  const signUp = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth => {
      console.log(auth);
      if (auth) {
        navigate('/');
      }
    })).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to={'/'}>
          <img 
              className='login_image' 
              src="https://www.nicepng.com/png/full/247-2478281_proudly-sa-online-shopping-platform-online-shopping.png" 
          />
      </Link>

      <div className='login_container'>
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
          </form>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <button type='submit' className='login_signUpButton' onClick={signUp}>Create your Shopping Account</button>
      </div>
    </div>

  )
}

export default Login