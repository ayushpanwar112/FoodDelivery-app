import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
const Navbar = ({setShowLogin}) => {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-6">
      {/* Logo */}
      <img
        src="./admin_assets/logo.png"
        className="w-24 md:w-32 logo"
        alt="Logo"
      />

      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:text-1xl cursor-pointer">
        <Link to="/"
          className={activeMenu === "home" ? "active" : ""}
          onClick={() => setActiveMenu("home")}
        >
          Home
        </Link>
        <a href="#menu"
          className={activeMenu === "menu" ? "active" : ""}
          onClick={() => setActiveMenu("menu")}
        >
          Menu
        </a>
        <a href="#footer"
          className={activeMenu === "contact" ? "active" : ""}
          onClick={() => setActiveMenu("contact")}
        >
          Contact us
        </a>
      </ul>

      {/* Icons and Button */}
      <div className="flex justify-center items-center gap-8 md:gap-12">
        <img
          src="./frontend_assets/search_icon.png"
          className="w-6 md:w-8"
          alt="Search"
        />

        <div className="relative"> 
          <Link to="/cart">
          <img
            src="./frontend_assets/basket_icon.png"
            className="w-6 md:w-8"
            alt="Basket"
          />
          </Link>
          
          <div className="dot absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl md:px-6 hover:bg-stone-800 transition duration-1000" onClick={()=>setShowLogin(true)}> 
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
