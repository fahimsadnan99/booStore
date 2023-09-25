import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  let [open, setOpen] = useState(false);

  let NabLink = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Skills",
      link: "#Skills",
    },
    {
      name: "Portfolio",
      link: "#Portfolio",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];

  return (
    <div className="w-full shadow-md fixed top-0 left-0 z-[999] ">
      <div className="  md:px-10 md:flex items-center justify-between xs:py-4 md:py-0">
        <a className=" font-bold  md:px-0 " href="#Home">
          <img src={Logo} alt="logo" className="md:w-32 md:h-20 xs:w-24 xs:h-12" />
        </a>

        <div
          className=" cursor-pointer md:hidden absolute top-4 right-10 text-3xl  "
          onClick={() => setOpen(!open)}
        >
            
          <ion-icon  name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`navbrUl navbarResponsiveMenu ${
            open ? `top-16 ` : "top-[-499px]"
          } md:opacity-100 md:z-auto opacity-0 mr-8 font-mukta`}
        >
          {NabLink.map((link, index) => {
            return (
              <li key={index} className="md:ml-8">
                <a href={link.link} className="text-xl " onClick={() => setOpen(!open)}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
