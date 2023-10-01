import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  var retrievedArray = JSON.parse(localStorage.getItem('myArray'));
 
  const router = useNavigate();

  let [open, setOpen] = useState(false);

  let NabLink = [
    {
      name: "Home",
      link: "#Home",
      path: "/",
    },

    {
      name: "Courses",
      link: "#Courses",
      path: "/courses",
    },

    
    {
      name: "Sign up",
      link: "#Sign up",
      path: "/Sign_up",
    },
  ];


  
  return (
    <div className="w-full  top-0 left-0 z-[999] fixed bg-white">
      <div className="  md:px-10 md:flex items-center justify-between xs:py-4 md:py-0">
        <Link className=" font-bold  md:px-0 " to={"/"}>
          <img src={Logo} alt="logo" className="ml-5 my-2 md:ml-0 md:my-0 w-36 md:w-32 md:h-16 xs:w-24 xs:h-12" />
        </Link>

        <div
          className=" cursor-pointer md:hidden absolute top-4 right-10 text-3xl  "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`navbrUl navbarResponsiveMenu bg-white ${
            open ? `left-0 ` : "left-[-770px] z-[888]"
          } md:opacity-100 md:z-auto opacity-0 mr-8 font-semibold`}
        >
          {NabLink.map((link, index) => {
            return (

              retrievedArray?.isLogin && link.path == "/Sign_up" ? "" :
              <li
                key={index}
                className={
                  link.path !== "/Sign_up"
                    ? "md:ml-8"
                    : "bg-[#4D2C5E] px-2 md:ml-8 py-0.5  rounded-full text-white"
                }
              >
                <Link
                  to={link.path}
                  className="text-xl "
                  onClick={() => {
                    
                    setOpen(!open);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {
            retrievedArray?.isLogin && (
              <li className="md:ml-8">
              <button
                className="text-xl "
                onClick={() => {
                  localStorage.setItem("myArray", JSON.stringify({...retrievedArray,isLogin : false}));
               
                  setOpen(!open);
                }}
              >
                Logout
              </button>
            </li>
            )
          }

         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
