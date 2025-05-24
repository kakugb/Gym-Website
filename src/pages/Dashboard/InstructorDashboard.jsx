import DashboardLayout from "../../Layouts/DashboardLayout";

export default function InstructorDashboard() {
  return (
    <DashboardLayout
      role="Instructor"
      sidebarItems={["Profile", "Student Record", "Users", "Classes Manage", "Attendance"]}
    />
  );
}
