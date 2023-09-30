import React from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-16'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default App