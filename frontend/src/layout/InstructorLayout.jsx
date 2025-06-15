import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import InstructorNavbar from '../pages/Dashboard/InstructorDashboard/InstructorNavbar';
import InstructorSidebar from '../pages/Dashboard/InstructorDashboard/InstructorSidebar';
function InstructorLayout() {
  const location = useLocation();

  const hideSidebarRoutes = ['/instructor/dashboard', '/instructor/info', '/instructor/about'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  return (
     <div className="flex h-screen">
       {!shouldHideSidebar && <InstructorSidebar />}
      
      <div className="flex flex-col flex-1">
        <InstructorNavbar />
        <main className="flex-1 p-4 flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default InstructorLayout





