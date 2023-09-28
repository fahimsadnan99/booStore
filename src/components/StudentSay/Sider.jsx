import React, { useEffect } from "react";
import Slider from "react-slick";
import p1 from "../../assets/P1.svg";
import p2 from "../../assets/P2.svg";
import p3 from "../../assets/P3.svg";

const data = [
  {
    name: "Finlay Kirk",
    img: p1,
    cetagory: "Web Developper",
    des: `“Teachings of the great explore of truth, 
        the master-builder of human happiness. 
        no one rejects,dislikes, or avoids pleasure 
        itself, pleasure itself”`,
  },
  {
    name: "Dannette P. Cervantes",
    img: p2,
    cetagory: "Web Developper",
    des: `“Complete account of the system and
        expound the actual Contrary to popular
        belief, Lorem Ipsum is not simply 
        random text. It has roots”`,
  },
  {
    name: "Clara R. Altman",
    img: p3,
    cetagory: "UI&UX Design",
    des: `“There are many variations of passages
        of Lorem Ipsum available, but the majority
        have suffered alteration in some form,
        by injected humour”`,
  },
  {
    name: "Finlay Kirk",
    img: p1,
    cetagory: "Web Developper",
    des: `“Teachings of the great explore of truth, 
        the master-builder of human happiness. 
        no one rejects,dislikes, or avoids pleasure 
        itself, pleasure itself”`,
  },
  {
    name: "Dannette P. Cervantes",
    img: p2,
    cetagory: "Web Developper",
    des: `“Complete account of the system and
        expound the actual Contrary to popular
        belief, Lorem Ipsum is not simply 
        random text. It has roots”`,
  },
  {
    name: "Clara R. Altman",
    img: p3,
    cetagory: "UI&UX Design",
    des: `“There are many variations of passages
        of Lorem Ipsum available, but the majority
        have suffered alteration in some form,
        by injected humour”`,
  },
];

const Sider = () => {

    const show =()=>{
      if(screen.width > 1024){
        return 3
      }
      if(screen.width > 768){
        return 2
       }
       if(screen.width < 768){
        return 1
       }

      
    }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: show(),
    slidesToScroll: 1,
  };


  useEffect(()=>{
    show()
  },[screen.width])
 

  return (
    <div className="mx-0 md:mx-10 lg:mx-24 my-16">
      <Slider {...settings} >
        {data.map((item, ind) => {
          return (
            <div className="p-3  space-y-3  ring-1 ring-gray-400 shadow-black/30 rounded-md">
              <p className="opacity-60">{item.des}</p>
              <div className="flex space-x-2">
                <img src={item.img} alt="img" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="opacity-70 text-sm">{item.cetagory}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sider;
