import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-body-tertiary ' style={{minHeight:"100vh"}}>
    <Navbar />
    <App />
    
    </div>
    <Footer/>
  </StrictMode>
)
