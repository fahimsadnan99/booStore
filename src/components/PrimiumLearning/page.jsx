import React from 'react'
import LeftSide from './LeftSide'
import RightSide from "./RightSide"
import "../../Style/Primium.css" 

const index = () => {
  return (
    <div className='primiumWrapper mt-10'>

        <div className='responsive'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
        </div>
    </div>
  )
}

export default index