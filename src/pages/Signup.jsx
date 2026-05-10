import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-10 rounded-3xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Signup</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-6 outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-xl"
        >
          Signup
        </button>

        <p className="text-center mt-6 text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
