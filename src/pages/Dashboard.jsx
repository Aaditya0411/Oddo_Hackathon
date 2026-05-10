import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      } min-h-screen`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="p-10">
        {/* Header */}

        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">My Trips</h1>

            <p
              className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-2 text-lg`}
            >
              Explore and manage your journeys
            </p>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition-all duration-300"
          >
            + Create Trip
          </button>
        </div>

        {/* Search Bar */}

        <div className="mb-10">
          <input
            type="text"
            placeholder="Search destinations..."
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900 shadow-lg"
            } w-full border p-5 rounded-2xl outline-none text-lg`}
          />
        </div>

        {/* Trip Cards */}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">Paris Adventure</h2>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3`}
              >
                5 Days • ₹45,000
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">Dubai Escape</h2>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3`}
              >
                7 Days • ₹70,000
              </p>
            </div>
          </div>

          {/* Card 3 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } rounded-3xl overflow-hidden border hover:scale-105 transition-all duration-300`}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">Tokyo Nights</h2>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3`}
              >
                10 Days • ₹1,20,000
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-4xl font-bold text-blue-500">12</h2>

            <p
              className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3 text-lg`}
            >
              Trips Planned
            </p>
          </div>

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-4xl font-bold text-green-500">₹2.4L</h2>

            <p
              className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3 text-lg`}
            >
              Total Budget Managed
            </p>
          </div>

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-4xl font-bold text-pink-500">8</h2>

            <p
              className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-3 text-lg`}
            >
              Countries Explored
            </p>
          </div>
        </div>

        {/* AI Recommendations */}

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">AI Travel Recommendations</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-8 rounded-3xl border hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-blue-500">Bali Retreat</h3>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4`}
              >
                Perfect for beach lovers and budget travelers.
              </p>
            </div>

            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-8 rounded-3xl border hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-green-500">Swiss Alps</h3>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4`}
              >
                Ideal for scenic adventures and mountain exploration.
              </p>
            </div>

            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-8 rounded-3xl border hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-pink-500">
                New York City
              </h3>

              <p
                className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4`}
              >
                Best for nightlife, shopping, and city experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
