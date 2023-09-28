import React from 'react'
import HeroObj from "../../assets/heroObj.svg"

const HeroRight = () => {
  return (
    <div className='md:col-span-2 heroRight'>
        <img src={HeroObj} alt="heroObj" className='w-auto pt-10  '/>
    </div>
  )
}

export default HeroRight