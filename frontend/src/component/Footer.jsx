import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/infosection" className="text-gray-300 hover:text-white transition duration-300">
                  Info Section
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-white transition duration-300">
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: support@myapp.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Address: 123 Main St, City, Country</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About MyApp</h3>
            <p className="text-gray-300">
              MyApp is your go-to platform for managing gym-related services and more.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">© 2025 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;