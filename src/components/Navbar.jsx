// components/Navbar.jsx
import { Menu } from "lucide-react";

export default function Navbar({
  username,
  onLogout,
  onNavigate,
  showNavbarMenu,
  setShowNavbarMenu,
  toggleSidebar,
  isDashboardView,
}) {
  const menuItems = ["Home", "About", "Introduction", "Dashboard"];

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Sidebar toggle */}
        {isDashboardView && (
          <button className="md:hidden" onClick={toggleSidebar}>
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Navbar toggle */}
        <button className="md:hidden" onClick={() => setShowNavbarMenu((prev) => !prev)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <button key={item} onClick={() => onNavigate(item)} className="hover:underline">
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="text-right">
        <span className="mr-4 capitalize">{username}</span>
        <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>

      {/* Mobile nav */}
      {showNavbarMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className="block w-full text-left p-4 border-b"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
