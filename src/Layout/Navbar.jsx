import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate} from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  const router = useNavigate()
 
  let [open, setOpen] = useState(false);

  let NabLink = [
    {
      name: "Home",
      link: "#Home",
      path : "/",
    },
    {
      name: "About",
      link: "#About",
      path : "/about",
    },
    {
      name: "Courses",
      link: "#Courses",
      path : "/courses",
    },
    {
      name: "Our Service",
      link: "#Our Service",
      path : "/our_service",
    },
    {
      name: "Contact",
      link: "#Contact",
      path : "/contact",
    }
  ];

  return (
    <div className="w-full  top-0 left-0 z-[999] fixed bg-white">
      <div className="  md:px-10 md:flex items-center justify-between xs:py-4 md:py-0">
        <Link className=" font-bold  md:px-0 " 
        to={"/"}>
          <img src={Logo} alt="logo" className="md:w-32 md:h-16 xs:w-24 xs:h-12" />
        </Link>

        <div
          className=" cursor-pointer md:hidden absolute top-4 right-10 text-3xl  "
          onClick={() => setOpen(!open)}
        >
            
          <ion-icon  name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`navbrUl navbarResponsiveMenu bg-white ${
            open ? `left-0 ` : "left-[-770px] z-[888]"
          } md:opacity-100 md:z-auto opacity-0 mr-8 font-semibold`}
        >
          {NabLink.map((link, index) => {
            return (
              <li key={index} className="md:ml-8">
                <Link to={link.path}  className="text-xl " onClick={() => {
                  
                  setOpen(!open)}}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
