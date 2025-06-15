import { MapPin, PlusCircle, ListOrdered, Menu, X } from "lucide-react";
import React from "react";

const Sidebar = ({ toggleSidebar, isOpen, onSelect }) => {
  const menuItems = [
    { icon: <MapPin size={24} />, text: "Add City", path: "/admin" },
    { icon: <PlusCircle size={24} />, text: "Add Turf", path: "/admin/addground" },
    { icon: <ListOrdered size={24} />, text: "Show Turfs", path: "/admin" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-72 pt-10" : "w-20 pt-10"
      } bg-[#171b61] text-white min-h-screen relative duration-300 ease-in-out flex flex-col`}
    >
      {/* Toggle Button */}
      <div
        className={`w-full flex ${isOpen ? "justify-end" : "justify-center"}`}
      >
        <button
          onClick={toggleSidebar}
          className={`${
            !isOpen && "rotate-180"
          } transition-all ease-in-out duration-300 cursor-pointer pr-2`}
        >
          {!isOpen ? <Menu /> : <X />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-5">
        <img
          src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
          alt="Logo"
          className="w-10 h-10"
        />
      </div>

      {/* Menu List */}
      <ul className="mt-10 w-full">
        {menuItems.map(({ icon, text, path }, index) => (
          <li
            key={index}
            className="text-lg text-gray-400 hover:bg-[#5e5f91] hover:text-white w-full cursor-pointer"
            onClick={() => onSelect(path)}
          >
            <div
              className={`flex items-center px-4 py-5 w-full ${
                isOpen ? "justify-start" : "justify-center"
              }`}
            >
              {icon}
              <span className={`ml-5 ${!isOpen && "hidden"}`}>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
