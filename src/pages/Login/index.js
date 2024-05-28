import React,{useEffect} from 'react'
import {Login as LoginComponent} from '../../components'
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  // useEffect(() => {
  //   // Check if user is already logged in (token exists)
  //   const user = localStorage.getItem('user'); // assuming you're using localStorage for token storage
  //   if (user) {
  //     // redirect to home page
  //     window.location.href = '/dashboard';
  //   }
  // }, []);

  return (
    <GoogleOAuthProvider clientId="924614841454-3onhpmuo14la14i4mror701dvoiq1ov9.apps.googleusercontent.com">
    <LoginComponent />
    </GoogleOAuthProvider>
  )
}

export default Login
