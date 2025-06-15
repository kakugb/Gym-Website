import React from 'react'
import { Link } from 'react-router-dom'

function InstructorSidebar() {
  return (
     <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <Link to="/instructor/dashboard" className="flex items-center space-x-2">
            <img
              className="h-8 w-auto"
              src="https://via.placeholder.com/100x40?text=Logo"
              alt="Logo"
            />
            <span className="text-lg font-bold">MyApp</span>
          </Link>
        </div>

 
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            to="/instructor/dashboard"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </Link>
          <Link
            to="/instructor/info"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Info</span>
          </Link>
          <Link
            to="/instructor/about"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>About</span>
          </Link>
          <Link
            to="/instructor/dashboard-page"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10h6m-6 0H3m12 0h6m-6-10h6M3 7h6" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/instructor/student"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v2h5m-3-6h16M4 16V4h16v12M9 8h6" />
            </svg>
            <span>Student</span>
          </Link>
          <Link
            to="/instructor/fee-detail"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Fee Detail</span>
          </Link>
          <Link
            to="/instructor/gym-list"
            className="flex items-center space-x-3 px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>List of Gym</span>
          </Link>
        </nav>

        <div className="border-t border-gray-700 p-4">
          <p className="text-sm text-gray-400 text-center">© 2025 MyApp</p>
        </div>
      </div>
    </div>
  )
}

export default InstructorSidebar



