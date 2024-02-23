import React,{useEffect} from 'react'
import {Login as LoginComponent} from '../../components'


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
    <LoginComponent />
  )
}

export default Login
