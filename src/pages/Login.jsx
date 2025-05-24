import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginUser(form.username, form.password);
    if (user) {
      navigate(`/${user.role}`);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-blue-500 w-full text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
