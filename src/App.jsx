
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import { getUser } from "./auth";

const ProtectedRoute = ({ children }) => {
  const user = getUser();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  const user = getUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to={`/${user.role}`} /> : <Landing />} />
        <Route path="/login" element={user ? <Navigate to={`/${user.role}`} /> : <Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor"
          element={
            <ProtectedRoute>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
