import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from '../pages/Dashboard/AdminDashboard/AdminNavbar';
import AdminSidebar from '../pages/Dashboard/AdminDashboard/AdminSidebar';

const AdminLayout = () => {
  const location = useLocation();

  const hideSidebarRoutes = ['/admin/dashboard', '/admin/info', '/admin/about'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen">
      {!shouldHideSidebar && <AdminSidebar />}
      <div className="flex flex-col flex-1">
        <AdminNavbar />
        <main className="flex-1 p-4 flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
