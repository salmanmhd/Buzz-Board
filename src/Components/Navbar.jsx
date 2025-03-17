import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaPlus, FaCompass } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="feed-nav flex items-center justify-around  text-white h-[5.2rem]">
      <div className="logo text-4xl">ChirpChat</div>
      <div className="search-bar">
        <input type="text" placeholder="&#128269; Search" />
      </div>

      <div className="nav-links ">
        <span className="nav-icon">
          <IoMdHome />
        </span>
        <span className="nav-icon">
          <FaPlus />
        </span>
        <span className="nav-icon">
          <FiMessageCircle />
        </span>
        <span className="nav-icon">
          <FaCompass />
        </span>
      </div>

      <div className="profile-nav">
        <img
          src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg"
          alt=""
        />
        <p className="userName text-lg font-bold">Joseph</p>
      </div>
      <button>Logout</button>
    </nav>
  );
};

export default Navbar;
