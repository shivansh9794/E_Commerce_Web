import React from 'react'
import { Route,Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import AllUsers from './pages/AllUsers'
const App = () => {
  return (
    <Routes>
       <Route path='/' element={<HomePage></HomePage>}/>
       <Route path='/login' element={<LoginPage></LoginPage>}/>
       <Route path='/allUsers' element={<AllUsers></AllUsers>}/>
       {/* <Route path='/' element={}/>
       <Route path='/' element={}/>
       <Route path='/' element={}/> */}
    </Routes>
  )
}

export default App