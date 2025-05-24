import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to EduPortal</h1>
      <p className="mb-6">Your hub for Admins, Instructors, and Students</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</Link>
      </div>
    </div>
  );
}
