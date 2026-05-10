import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      } min-h-screen`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}

      <div className="px-10 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
          Plan Your Dream Journey With Ease
        </h1>

        <p
          className={`${
            darkMode ? "text-gray-400" : "text-slate-600"
          } text-xl mt-8 max-w-2xl mx-auto`}
        >
          Create personalized itineraries, manage budgets, and organize trips
          smarter with Traveloop.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
        >
          Start Planning
        </button>
      </div>

      {/* Popular Destinations */}

      <div className="px-10 pb-20">
        <h2 className="text-5xl font-bold mb-10">Popular Destinations</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Paris */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Paris</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Explore the city of lights and romance.
              </p>
            </div>
          </div>

          {/* Dubai */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Dubai</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Luxury experiences and desert adventures.
              </p>
            </div>
          </div>

          {/* Tokyo */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-3xl font-bold">Tokyo</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Experience futuristic nightlife and culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
