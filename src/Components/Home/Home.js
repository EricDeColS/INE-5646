import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'

const Home = () => {
  return (
  <Routes>
    <Route path='/' element={<Login />} />
  </Routes>
  )
}

export default Home