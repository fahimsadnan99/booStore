import React from 'react'
import Card from '../Common/Card'
import { data } from '../../DemoData/data'
import "./style.css"
import OurtTrackHead from '../Common/OurtTrackHead'


const index = () => {
  return (
    <div className='responsive'>
   <OurtTrackHead></OurtTrackHead>

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