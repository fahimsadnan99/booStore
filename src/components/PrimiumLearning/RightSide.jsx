import React from "react";
import loveImg from "../../assets/Heart.svg"
import pazzel from "../../assets/puzzel.svg"


const data = [
    {
        title : "Easily Accessible",
        img : loveImg
    },
    {
        title : "Fun learning expe",
        img : pazzel
    }
]

const RightSide = () => {
  return (
    <div className=" mt:10 md:mt-20">
      <div>
        <p className="text-primaryClr text-4xl md:text-5xl font-bold">
          Premium <span className="text-secondaryClr ">Learning </span>
          <br></br>
          <p className="my-2">Experience</p>
        </p>
      </div>
      <div>
        {
            data?.map((item,ind)=>{
                return(
                    <div key={ind} className="flex my-6">
                        <img src={item.img} className="w-14 md:w-16" alt={item.title} />
                        <div className="space-y-1 ml-2 text-primaryClr">
                            <p className="font-semibold text-xl">{item.title}</p>
                            <p className="opacity-70">Learning Will fell Very Comfortable With Courslab.</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default RightSide;
