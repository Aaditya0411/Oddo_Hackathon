import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <nav
      className={`${
        darkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
      } flex items-center justify-between px-10 py-6 border-b sticky top-0 z-50`}
    >
      <h1 className="text-3xl font-bold text-blue-500">Traveloop</h1>

      <div className="flex items-center gap-8 text-lg">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-blue-500 font-semibold"
              : darkMode
                ? "text-gray-300 hover:text-white"
                : "text-slate-600 hover:text-black"
          }`}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard"
              ? "text-blue-500 font-semibold"
              : darkMode
                ? "text-gray-300 hover:text-white"
                : "text-slate-600 hover:text-black"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/create"
          className={`${
            location.pathname === "/create"
              ? "text-blue-500 font-semibold"
              : darkMode
                ? "text-gray-300 hover:text-white"
                : "text-slate-600 hover:text-black"
          }`}
        >
          Create Trip
        </Link>

        <Link
          to="/itinerary"
          className={`${
            location.pathname === "/itinerary"
              ? "text-blue-500 font-semibold"
              : darkMode
                ? "text-gray-300 hover:text-white"
                : "text-slate-600 hover:text-black"
          }`}
        >
          Itinerary
        </Link>

        {/* Theme Toggle */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
