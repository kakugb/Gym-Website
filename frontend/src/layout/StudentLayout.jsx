
import { Outlet, useLocation } from 'react-router-dom';
import StudentNavbar from '../pages/Dashboard/StudentDashboard/StudentNavbar';
import StudentSidebar from '../pages/Dashboard/StudentDashboard/StudentSidebar';
function StudentLayout() {
  const location = useLocation();
  const hideSidebarRoutes = ['/student/dashboard', '/student/info', '/student/about'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  return (
     <div className="flex h-screen">
      <StudentSidebar />
      <div className="flex flex-col flex-1">
         {!shouldHideSidebar && <StudentNavbar />}
        
        <main className="flex-1 p-4 flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default StudentLayout


