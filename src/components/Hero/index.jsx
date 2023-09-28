import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import "../../Style/Hero.css"


const index = () => {
  return (
    <div className='heroWrapper relative'>
        <div className='mx-5 md:mx-10 lg:mx-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 py-10 space-y-7 md:space-y-0'>
            <HeroLeft></HeroLeft>
            <HeroRight></HeroRight>
            </div>
        
        </div>
        
    </div>
  )
}

export default index