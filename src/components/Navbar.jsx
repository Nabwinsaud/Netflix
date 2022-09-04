import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-5 fixed z-90 top-0 left-0 right-0">
      <Link to="/">
        <h2 className="text-red-700 uppercase text-2xl font-semibold hover:cursor-pointer hover:opacity-90 transition-all duration-250  ">
          Netflix
        </h2>
      </Link>
      <div className="flex items-center justify-center">
        <Link
          to="/login"
          className="hover:opacity-90 transition-all list-none duration-200 hover:scale-110 bg-red-700 rounded-sm px-3 h-7  text-center capitalize text-white text-[10px]"
        >
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
