import React from 'react'
import { Route,Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <Routes>
       <Route path='/' element={<HomePage></HomePage>}/>
       {/* <Route path='/' element={}/>
       <Route path='/' element={}/>
       <Route path='/' element={}/> */}
    </Routes>
  )
}

export default App