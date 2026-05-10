import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.9)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-slate-900/80 backdrop-blur-lg p-10 rounded-3xl w-full max-w-md border border-slate-700">
        <h1 className="text-5xl font-bold mb-3 text-center text-blue-400">
          Traveloop
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Plan your dream trips effortlessly ✈️
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800/90 mb-4 outline-none border border-slate-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800/90 mb-6 outline-none border border-slate-700"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-4 rounded-xl text-lg font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-400">
          Don't have an account?
          <Link to="/signup" className="text-blue-400 ml-2 hover:text-blue-300">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
