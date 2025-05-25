// components/DashboardContentSwitcher.jsx

import Users from "../views/Users";
import StudentRecord from "../views/StudentRecord";
import InstructorRecord from "../views/InstructorRecord";
import Classes from "../views/Classes";
import Attendance from "../views/Attendance";
import Fee from "../views/Fee";
import Profile from '../views/Porfile'; 
export default function DashboardContentSwitcher({ section, role }) {
  switch (section) {
    case "Profile":
      return <Profile />;
    case "Users":
      return <Users />;
    case "Student Record":
      return <StudentRecord />;
    case "Instructor Record":
      return <InstructorRecord />;
    case "Classes":
    case "Classes Manage":
      return <Classes />;
    case "Attendance":
      return <Attendance />;
    case "Fee":
      return <Fee />;
    case "Home":
    case "About":
    case "Introduction":
      return <div className="text-xl">Welcome to {section}</div>;
    default:
      return <div className="text-xl">Welcome {role}</div>;
  }
}