import DashboardLayout from "../../Layouts/DashboardLayout";

export default function StudentDashboard() {
  return (
    <DashboardLayout
      role="Student"
      sidebarItems={["Profile", "Classes", "Attendance", "Fee"]}
    />
  );
}
