import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold">TurfBook</h1>
      <div className="space-x-4">
        <button className="bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-200 transition">
          Login
        </button>
        <button className="bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-200 transition">
          Signup
        </button>
      </div>
    </nav>
  );
}

export default Navbar