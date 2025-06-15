import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="https://via.placeholder.com/150x50?text=Logo"
                alt="Logo"
              />
              <span className="ml-2 text-white text-xl font-bold">MyApp</span>
            </Link>
          </div>

          <div className="hidden sm:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/infosection"
              className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Info Section
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Signup
            </Link>
          </div>

        
          <div className="sm:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;