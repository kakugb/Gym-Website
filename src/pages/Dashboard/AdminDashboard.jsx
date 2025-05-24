
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function AdminDashboard() {
  return (
    <DashboardLayout
      role="Admin"
      sidebarItems={["Profile", "Instructor Record", "Student Record", "Users", "Classes"]}
    />
  );
}
