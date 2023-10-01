import React from "react";
import { data } from "../../DemoData/data";
import Star from "../../assets/star.svg";
import Watch from "../../assets/clock.svg";
import Video from "../../assets/video.svg";
import downlode from "../../assets/download.svg";
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
  var retrievedArray = JSON.parse(localStorage.getItem('myArray'));
 
  const router = useNavigate();

  
  
  return (
    <div>
      {item !== undefined && (
        <div className="mt-3 bg-white p-3 shadow-sm shadow-black/20 sm:w-96 md:w-80 lg:w-80 xl:w-96 rounded-md">
            <div className="border-b-2 border-dotted border-red-300 pb-2 ">
              <img src={item?.img} alt={item?.name} className="h-52 w-full rounded-xl"/>
              <div className="flex justify-between">
                <p className="text-base opacity-70 italic">{item?.cetagory}</p>
                <img src={Star} alt="start" />
              </div>
              <p className="font-semibold text-xl">{item?.name}</p>
              <p className="font-semibold text-xl text-secondaryClr">${item?.price}</p>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-1">
                <img src={Watch} alt="watch" />
                <p className="opacity-70">{item?.watchTime}</p>
              </div>

              <div className="flex items-center space-x-1">
                <img src={Video} alt="Video" />
                <p className="opacity-70">{item?.totalCourse} Courses</p>
              </div>
              <div className="flex items-center space-x-1">
                <img src={downlode} alt="Downlode" />
                <p className="opacity-70">{item?.totalDownlode} Sales</p>
              </div>
            </div>
            <div className="relative w-full text-center mt-3" >

            <button className="absolute bg-secondaryClr text-white px-5 py-2 rounded-full
            bottom-[-25px] right-28
            "
            onClick={()=> router(`/courses/${item.name}`)}
            >Join Course</button>
            </div>
           
            
            
          </div>
          
      )}
          
    </div>
  );
};

export default Card;
