import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-gray-900 h-[60px] flex justify-end items-center px-4 text-gray-900 fixed top-0 w-full">
      <div className="lg:flex hidden">
        {/* Desktop navigation links */}
        <ul className="flex first-letter:space-x-4 text-white items-center ">
          <li>
            <span className="hover:bg-gray-500 hover:text-white hover:rounded-lg cursor-pointer transition duration-300">
              Home
            </span>
          </li>
          <li>
            <span className="hover:bg-gray-500 hover:text-white hover:rounded-lg cursor-pointer transition duration-300">
              Games
            </span>
          </li>
          <li>
            <span className="hover:bg-gray-500 hover:text-white hover:rounded-lg cursor-pointer transition duration-300">
              Genres
            </span>
          </li>
          <li>
            <span className="hover:bg-gray-500 hover:text-white hover:rounded-lg cursor-pointer transition duration-300">
              Reviews
            </span>
          </li>
          <li>
            <span className="hover:bg-gray-500 hover:text-white hover:rounded-lg cursor-pointer transition duration-300">
              About
            </span>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        {/* Mobile navigation toggle button with Font Awesome icons */}
        <button
          className="p-2 outline-none text-blue-400"
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {/* Mobile navigation links (displayed when toggle button is clicked) */}
        {isMobileNavOpen && (
          <ul className="absolute top-16 right-4 bg-gray-900 p-4 space-y-2">
            <li>
              <span className="text-white font-bold cursor-pointer" onClick={toggleMobileNav}>
                Home
              </span>
            </li>
            <li>
              <span className="text-white font-bold cursor-pointer"  onClick={toggleMobileNav}>
                Games
              </span>
            </li>
            <li>
              <span className="text-white font-bold cursor-pointer"  onClick={toggleMobileNav}>
                Genres
              </span>
            </li>
            <li>
              <span className="text-white font-bold cursor-pointer"  onClick={toggleMobileNav}>
                Reviews
              </span>
            </li>
            <li>
              <span className="text-white font-bold cursor-pointer"  onClick={toggleMobileNav}>
                About
              </span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
