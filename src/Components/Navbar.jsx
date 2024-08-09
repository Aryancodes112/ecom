import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart.CartItems.length); // Get cart items count
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container bg-gray-800 p-4 flex justify-between items-center">
      <div className="logo text-white text-2xl">
        {/* Example Logo */}
        <Link to="/">MyStore</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} transition-all`}>
        <Link to="/" className="text-white px-2 py-2 pt-1 block md:inline-block">
          Home
        </Link>
        <Link to="/categories" className="text-white ml-4 px-2 py-2 pt-1 block md:inline-block">
          Categories
        </Link>
        <Link to="/products" className="text-white ml-4 px-2 py-2 pt-1 block md:inline-block">
          Products
        </Link>
        <Link to="/cart" className="text-white ml-4 px-2 py-2 pt-1 block md:inline-block">
          Cart {items > 0 && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{items}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
