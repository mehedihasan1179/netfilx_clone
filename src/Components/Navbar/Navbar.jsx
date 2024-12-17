import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import pro_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("dark-nav");
      } else {
        navRef.current.classList.remove("dark-nav");
      }
    });
  });

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My Lists</a>
          </li>
          <li>
            <a href="#">Browse by Languages</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="profile">
          <img src={pro_img} alt="" className="profile-img" />
          <img src={caret_icon} alt="" />
          <div className="sign-out">
            <p onClick={() => {logout()}}>Sign out from netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
