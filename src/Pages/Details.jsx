import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../DemoData/data'

const Details = () => {
    var retrievedArray = JSON.parse(localStorage.getItem('myArray'));
 
    const router = useNavigate();
    const {id}= useParams()
    const [item,setItem] = useState()

    useEffect(()=>{
         if(!retrievedArray.isLogin){
            router("/Sign_up")
         }
       data?.filter((item)=>{
              item?.name == id ? setItem(item) : "Item Not Found"
       })
    },[])
  
  return (
    <div className='responsive py-5'>
          <div className='lg:p-28 mx-auto'>
             <img src={item?.img} className='rounded-xl' alt='img'/>
             <p className='text-primaryClr font-semibold my-3 text-xl lg:text-2xl'>{item?.name}</p>
             <p className='text-primaryClr font-semibold my-3 text-xl lg:text-2xl'>Cetagory {item?.cetagory}</p>
             <p className='text-primaryClr font-semibold my-3 text-xl lg:text-2xl'>Price : {item?.price}</p>
             <p className='text-primaryClr font-semibold my-3 text-xl lg:text-2xl'>Total Course : {item?.totalCourse}</p>
             <p className='text-primaryClr font-semibold my-3 text-xl lg:text-2xl'>Watch Time : {item?.watchTime}</p>
             
             <button className='bg-secondaryClr text-white px-6 py-2 text-lg rounded-sm'>Join The Course</button>
          </div>
      
    </div>
  )
}

export default Details