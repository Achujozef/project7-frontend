import React from 'react'
import Login from '../../components/Doctor/Login/Login'
import { GoogleOAuthProvider } from '@react-oauth/google';
function LoginPage() {
  return (
    <GoogleOAuthProvider clientId="528982387538-nauij15egaj4j1g102d6upo6psef1rqk.apps.googleusercontent.com">
    <Login/>
    </GoogleOAuthProvider>
  )
}

export default LoginPage