import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../Service/authService";

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      const { token, user } = res.data;

      localStorage.setItem('token', token); 
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'student') {
        navigate('/student/dashboard');
      } else if (user.role === 'instructor') {
        navigate('/instructor/dashboard');
      } else if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        alert('Unknown user role.');
      }
    } catch (err) {
      alert('Login failed.');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

        <input
          name="email"
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}