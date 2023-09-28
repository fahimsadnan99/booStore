import React from 'react'
import "../../Style/Subscribe.css"

const Subscribe = () => {
  return (
    <div className='responsive'>

    
    <div className='subscribe'>

        <div className='text-white text-center space-y-3'>
            <p className='font-bold text-2xl md:text-3xl lg:text-4xl'>Subscribe to our newsletter</p>
            <p className='opacity-60 text-sm'>Lorem Ipsum is simply dummy text of the printing.</p>
            <div className='inputGroup'>
                <input type='text' className='text-primaryClr' placeholder='Email Address'/>
                <button className='bg-secondaryClr '>Send</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Subscribe