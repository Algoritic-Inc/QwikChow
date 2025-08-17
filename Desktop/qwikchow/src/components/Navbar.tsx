import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">QwikChow</h1>
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#menu" className="hover:text-gray-200">
            Menu
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-200">
            About Us
          </a>
        </li>
        <li>
          <a href="#restaurants" className="hover:text-gray-200">
            For Restaurants
          </a>
        </li>
      </ul>
      <button className="bg-white text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
