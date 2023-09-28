import React from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-16'>
      <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default App