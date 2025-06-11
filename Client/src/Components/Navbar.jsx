import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <img
          src="https://groundbox.in/assets/images/logo.png"
          alt="GroundBox Logo"
          className="w-16"
        />
        <h1 className="text-2xl font-semibold text-orange-500">
          Ground<span className="text-green-500">Box</span>
        </h1>
      </div>
      <ul className="flex gap-10 text-green-500 font-medium">
        <li>Home</li>
        <li>Find Ground</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="bg-green-50 rounded-full px-4 py-2 flex items-center gap-2 text-green-600 text-sm">
          <span className="material-icons">location_on</span>
          <span>
            D - Block, Vaishali Nagar,
            <br />
            Jaipur, Rajasthan 302021
          </span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          <Link to={"/login"}> login</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
