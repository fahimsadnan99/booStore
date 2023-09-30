import React from 'react'
import { data } from '../DemoData/data'
import Card from "../components/Common/Card"

const Courses = () => {
  return (
    <div className='responsive py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
      {
        data?.map((item,ind)=>{
          return (
            <Card item={item} key={ind}></Card>
          )
        })
      }
    </div>
    </div>
  )
}

export default Courses