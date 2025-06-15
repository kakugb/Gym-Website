import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import AdminLayout from './layout/AdminLayout';
import InstructorLayout from './layout/InstructorLayout';
import StudentLayout from './layout/StudentLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';

import LandingPage from './pages/LandingPage';
import InfoSect from './pages/InfoSect';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import AdminHome from './pages/Dashboard/AdminDashboard/AdminHome';
import AdminInfo from './pages/Dashboard/AdminDashboard/Adminfo';
import AdminAbout from './pages/Dashboard/AdminDashboard/AdminAbout';
import AdminDashboard from './pages/Dashboard/AdminDashboard/AdminDashboard';
import AdminStudent from './pages/Dashboard/AdminDashboard/AdminStudent';
import AdminFeeDetail from './pages/Dashboard/AdminDashboard/AdminFeeDetail';
import AdminGymList from './pages/Dashboard/AdminDashboard/AdminGymList';

import InstructorHome from './pages/Dashboard/InstructorDashboard/InstructorHome';
import InstructorInfo from './pages/Dashboard/InstructorDashboard/Instructorinfo';
import InstructorAbout from './pages/Dashboard/InstructorDashboard/InstructorAbout';
import InstructorDashboard from './pages/Dashboard/InstructorDashboard/InstructorDashboard';
import InstructorStudent from './pages/Dashboard/InstructorDashboard/InstructorStudent';
import InstructorFeeDetail from './pages/Dashboard/InstructorDashboard/InstructorDetail';
import InstructorGymList from './pages/Dashboard/InstructorDashboard/InstructorGymList';

import StudentHome from './pages/Dashboard/StudentDashboard/StudentHome';
import StudentInfo from './pages/Dashboard/StudentDashboard/Studentinfo';
import StudentAbout from './pages/Dashboard/StudentDashboard/StudentAbout';
import StudentDashboard from './pages/Dashboard/StudentDashboard/StudentDashboard';
import StudentStudent from './pages/Dashboard/StudentDashboard/StudentStd';
import StudentFeeDetail from './pages/Dashboard/StudentDashboard/StudentDetal';
import StudentGymList from './pages/Dashboard/StudentDashboard/StudentGymList';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/infosection" element={<InfoSect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>

      {/* Admin dashboard routes */}
      <Route element={<ProtectedRoute allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="info" element={<AdminInfo />} />
          <Route path="about" element={<AdminAbout />} />
          <Route path="dashboard-page" element={<AdminDashboard />} />
          <Route path="student" element={<AdminStudent />} />
          <Route path="fee-detail" element={<AdminFeeDetail />} />
          <Route path="gym-list" element={<AdminGymList />} />
        </Route>
      </Route>

      {/* Instructor dashboard routes */}
      <Route element={<ProtectedRoute allowedRole="instructor" />}>
        <Route path="/instructor" element={<InstructorLayout />}>
          <Route path="dashboard" element={<InstructorHome />} />
          <Route path="info" element={<InstructorInfo />} />
          <Route path="about" element={<InstructorAbout />} />
          <Route path="dashboard-page" element={<InstructorDashboard />} />
          <Route path="student" element={<InstructorStudent />} />
          <Route path="fee-detail" element={<InstructorFeeDetail />} />
          <Route path="gym-list" element={<InstructorGymList />} />
        </Route>
      </Route>

      {/* Student dashboard routes */}
      <Route element={<ProtectedRoute allowedRole="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentHome />} />
          <Route path="info" element={<StudentInfo />} />
          <Route path="about" element={<StudentAbout />} />
          <Route path="dashboard-page" element={<StudentDashboard />} />
          <Route path="student" element={<StudentStudent />} />
          <Route path="fee-detail" element={<StudentFeeDetail />} />
          <Route path="gym-list" element={<StudentGymList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;