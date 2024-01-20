import React from "react";
import { useRef } from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
    const searchRef= useRef()
    const searchHandle=()=>{
        
    }
  return (
   

    <>
      <header className="header">
        <a href="#" className="logo"></a>
        <img src={logo} alt="" srcset="" />

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search">
            <div className="fas fa-shopping-cart"></div>
            <div className="fas fa-bars" id="menu-btn"></div>
          </div>
        </div>
        <div  className="search-form"  ref={searchRef}>
            <input type="search" name="" id="search-box" placeholder="Search Here..." onClick={searchHandle} />
            <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
      </header>
    </>
  );
};

export default Navbar;
