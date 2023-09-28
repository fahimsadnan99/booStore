import React from 'react'
import Card from '../Common/Card'
import { data } from '../../DemoData/data'
import "./style.css"


const index = () => {
  return (
    <div className='responsive'>
   <div className='text-center my-16 space-y-3 trackBg'>
     <p className='text-4xl font-bold text-[#000]'>Our Tracks</p>
     <p className='opacity-80'>Lorem Ipsum is simply dummy text of the printing.</p>
   </div>
   

   <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   '>
    {
      Array(3).fill(data[0]).map((item,ind)=>{
        return  <Card item={item} key={ind}></Card>
      })
    }
    <Card></Card>
   </div>
    </div>
  )
}

export default index