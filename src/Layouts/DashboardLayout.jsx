// layouts/DashboardLayout.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardContentSwitcher from "../components/DashboardContentSwitcher";
import { getUser, logoutUser } from "../auth";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ sidebarItems, role }) {
  const user = getUser();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleSidebarClick = (section) => {
    setActiveSection(section);
    setShowSidebar(false); // for mobile
  };

  const handleNavbarClick = (section) => {
    setActiveSection(section);
    setShowSidebar(false);
    setShowNavbarMenu(false);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      {activeSection === "Dashboard" || sidebarItems.includes(activeSection) ? (
        <Sidebar
          items={sidebarItems}
          onItemClick={handleSidebarClick}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          role={role}
        />
      ) : null}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar
          username={user.username}
          onLogout={handleLogout}
          onNavigate={handleNavbarClick}
          showNavbarMenu={showNavbarMenu}
          setShowNavbarMenu={setShowNavbarMenu}
          toggleSidebar={() => setShowSidebar(!showSidebar)}
          isDashboardView={activeSection === "Dashboard" || sidebarItems.includes(activeSection)}
        />
        <div className="p-6 overflow-auto">
          <DashboardContentSwitcher section={activeSection} role={role} />
        </div>
      </div>
    </div>
  );
}
