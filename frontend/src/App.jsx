import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/auth/signInPage'
import LoginPage from './pages/auth/LoginPage'
import Navbar from './components/NavBar'
import ProfilePage from './pages/profilePage'



const App = () => {
  return (
    <>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </>
  )
}

export default App