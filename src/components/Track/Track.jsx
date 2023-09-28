import React from "react";
import OurtTrackHead from "../Common/OurtTrackHead";
import Man1 from "../../assets/man1.svg";
import Man2 from "../../assets/man2.svg";
import Man3 from "../../assets/man3.svg";
import Instra from "../../assets/instra.svg";
import LinkDin from "../../assets/linkdin.svg";


const datas = [
  {
    name: "Matthew E. McNatt",
    img: Man1,
  },
  {
    name: "Tracy D. Wright",
    img: Man2,
  },
  {
    name: "Cynthia A. Nelson",
    img: Man3,
  },
];

const Track = () => {
  return (
    <div className="responsive">
      <OurtTrackHead></OurtTrackHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {datas?.map((item, ind) => {
          return (
            <div className="p-6 space-y-1 rounded-md shadow-sm shadow-black/30 bg-white" key={ind}>
              <img src={item.img} alt={item.name} />
              <p className="font-bold">{item.name}</p>
              <p className="opacity-70 font-semibold"> Professor @George Brown College</p>
             
              <p className="opacity-70">
                Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex
                commodo.
              </p>
              <div className="flex justify-between pt-4">
                <p className="text-secondaryClr font-semibold">Engineering physics</p>
                <div className="flex space-x-5">
                  <img src={Instra} alt="instra" />
                  <img src={LinkDin} alt="linkdin" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Track;
