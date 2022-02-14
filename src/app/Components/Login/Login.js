import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'
import RecoverPassword from './RecoverPassword'

const Login = () => {
  return (
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='passwordForgotten' element={<ForgotPassword />} />
        <Route path='register' element={<LoginCreate />} />
        <Route path='recoverPassword' element={<RecoverPassword />} />
      </Routes>
  )
}

export default Login