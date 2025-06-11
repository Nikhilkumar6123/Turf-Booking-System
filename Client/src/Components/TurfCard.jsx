// components/TurfCard.jsx
import React from "react";

export default function TurfCard({ title, location, price, description, image }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      {/* 📸 Turf Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📝 Content Section */}
      <div className="p-4 flex flex-col justify-between h-60">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>

        <div className="overflow-auto h-20 mt-2">
          <p className="text-sm text-gray-700">
            {description}
          </p>
        </div>

        {/* 💰 Price + Button */}
        <div className="mt-2 flex justify-between items-center">
          <span className="text-green-700 font-semibold text-md">₹{price}/hr</span>
          <button className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
