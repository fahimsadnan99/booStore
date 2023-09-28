import React from 'react'
import skill from "../../assets/skill.svg"
import career from "../../assets/Career.svg"
import Cartificate from "../../assets/Cartificate.svg"

const list = [
    {
        name : "Learn The Latest Skills",
        img : skill,
    },
    {
        name : "Get Ready For a Career",
        img : career,
    },
    {
        name : "Earn a Certificate",
        img : Cartificate,
    }
]

const index = () => {
  return (
    <div className='responsive mt-20 md:mt-0'>
  <div className='bg-bgClr  md:w-[90%] mx-auto rounded-md'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white '>
      {
        list.map((item,ind)=>{
            return (
                <div className='flex space-x-2 items-start p-4 md:p-8'>
                    <img src={item.img} className='w-12 md:w-14 lg:w-16' alt={item.name}/>
                    <div className='space-y-1 '>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='text-sm opacity-60'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                    </div>
                    </div>
            )
        })
      }
      </div>
  </div>
        
    </div>
  )
}

export default index