import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.svg"








const data = [
    {
        title : "Company",
        item : ["About Us","How to work?","Populer Course","Service"]
    },
    {
        title : "Courses",
        item : ["Categories","Ofline Course","Vidio Course"]
    },
    {
        title : "Support",
        item : ["FAQ","Help Center","Career","Privacy "]
    },
    {
        title : "Contac Info",
        item : ["+0913-705-3875","ElizabethJ@jourrapide.com",`4808 Skinner Hollow Road
        Days Creek, OR 97429`]
    },
]

const Footer = () => {
  return (
    <div className='bg-slate-400/10 mt-16 pt-10'>
    <div className='responsive pb-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='space-y-4'>
                <img src={logo} className='w-40' alt='logo'/>
                <p className='opacity-70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
            </div>
            {
                data?.map((item,ind)=>{
                    return (
                        <div key={ind} className='space-y-2'>
                            <p className='font-bold text-primaryClr'>{item.title}</p>
                            {
                                item.item.map((item,id)=>{
                                 return (
                                    <p className='opacity-70'>{item}</p>
                                 )
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
        </div>
        <hr></hr>
        <p className='text-center opacity-70 py-5'>BookStore All Right Reserved, 2022</p>
    </div>
  )
}

export default Footer