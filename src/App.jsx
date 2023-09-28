import React from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-16'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App