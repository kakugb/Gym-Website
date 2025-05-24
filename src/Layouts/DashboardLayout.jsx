import { useState } from "react";
import { getUser, logoutUser } from "../auth";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ sidebarItems, role }) {
  const user = getUser();
  const navigate = useNavigate();

  const [activeView, setActiveView] = useState("Dashboard");
  const [mainContent, setMainContent] = useState(`Welcome ${user.username}`);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleNavbarClick = (view) => {
    setActiveView(view);
    setMainContent(`Welcome to ${view}`);
  };

  const handleSidebarClick = (item) => {
    setActiveView("Dashboard");
    setMainContent(`Welcome to ${item}`);
  };

  return (
    <div className="flex h-screen">

      {activeView === "Dashboard" && (
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6 capitalize">{role} Panel</h2>
          <ul>
            {sidebarItems.map((item) => (
              <li
                key={item}
                onClick={() => handleSidebarClick(item)}
                className="py-2 hover:text-blue-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

 
      <div className="flex-1">
 
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <div className="space-x-4">
            <button onClick={() => handleNavbarClick("Home")} className="hover:underline">
              Home
            </button>
            <button onClick={() => handleNavbarClick("About")} className="hover:underline">
              About
            </button>
            <button onClick={() => handleNavbarClick("Introduction")} className="hover:underline">
              Introduction
            </button>
            <button onClick={() => handleNavbarClick("Dashboard")} className="hover:underline">
              Dashboard
            </button>
          </div>
          <div>
            <span className="mr-4 capitalize">{user.username}</span>
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          </div>
        </div>

        <div className="p-6 text-xl font-semibold">{mainContent}</div>
      </div>
    </div>
  );
}
