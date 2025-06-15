import React from 'react';

function AdminHome() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Manage your application efficiently. Use the sidebar to navigate to different sections like
        Student, Fee Detail, or List of Gym.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-blue-800">Quick Stats</h3>
          <p className="text-blue-600">View key metrics here.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-green-800">Recent Activity</h3>
          <p className="text-green-600">Check recent updates and logs.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;