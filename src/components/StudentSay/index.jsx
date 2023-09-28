import React from "react";
import Slider from "./Sider"

const index = () => {
  return (
    <div className="responsive my-20">
      <div className="text-center">
        <p className="text-4xl font-bold text-primaryClr">What student’s say</p>
        <p className="opacity-70">Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      <div className="responsive">
        <Slider></Slider>
      </div>
      
    </div>
  );
};

export default index;
