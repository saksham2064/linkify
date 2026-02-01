import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed top-6 right-[5vw] w-[90vw] bg-white rounded-full px-8 py-3 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <div className="text-lg font-bold">
        SKM
      </div>

      {/* Menu */}
      <ul className="items-center hidden gap-6 text-sm font-medium text-gray-700 md:flex">
        <li className="cursor-pointer hover:text-black">Templates</li>
        <li className="cursor-pointer hover:text-black">Marketplace</li>
        <li className="cursor-pointer hover:text-black">Discover</li>
        <li className="cursor-pointer hover:text-black">Pricing</li>
        <li className="cursor-pointer hover:text-black">Learn</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
          Login
        </button>
        <button className="px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800">
          Signup for Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;