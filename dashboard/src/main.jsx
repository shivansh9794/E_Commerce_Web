import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Toaster } from "react-hot-toast";
import Navbar from './components/NavBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar></Navbar>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
