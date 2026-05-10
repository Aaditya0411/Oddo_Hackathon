import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Itinerary({ darkMode, setDarkMode }) {
  const location = useLocation();

  const trip = location.state;

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
            <h1 className="text-5xl font-bold">{trip?.title}</h1>

            <p
              className={`${
                darkMode ? "text-gray-400" : "text-slate-600"
              } mt-3`}
            >
              {trip?.startDate} → {trip?.endDate}
            </p>
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded-2xl">
            Budget: ₹{trip?.budget}
          </button>
        </div>

        {/* Timeline Cards */}

        <div className="space-y-8">
          {/* Day 1 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-3xl font-bold mb-4">
              Day 1 — Arrival & Exploration
            </h2>

            <div
              className={`${
                darkMode ? "text-gray-300" : "text-slate-700"
              } space-y-3`}
            >
              <p>• Explore famous local attractions</p>

              <p>• Try local food</p>

              <p>• Evening city walk</p>
            </div>
          </div>

          {/* Day 2 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-3xl font-bold mb-4">
              Day 2 — Adventure Activities
            </h2>

            <div
              className={`${
                darkMode ? "text-gray-300" : "text-slate-700"
              } space-y-3`}
            >
              <p>• Outdoor activities</p>

              <p>• Photography spots</p>

              <p>• Local shopping</p>
            </div>
          </div>

          {/* Day 3 */}

          <div
            className={`${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}
          >
            <h2 className="text-3xl font-bold mb-4">Day 3 — Relax & Return</h2>

            <div
              className={`${
                darkMode ? "text-gray-300" : "text-slate-700"
              } space-y-3`}
            >
              <p>• Morning relaxation</p>

              <p>• Final sightseeing</p>

              <p>• Return journey</p>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}

        <div className="mt-14">
          <h2 className="text-4xl font-bold mb-8">Budget Breakdown</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}
            >
              <h3 className="text-2xl font-bold text-blue-500">₹18,000</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Flights
              </p>
            </div>

            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}
            >
              <h3 className="text-2xl font-bold text-green-500">₹12,000</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Hotels
              </p>
            </div>

            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}
            >
              <h3 className="text-2xl font-bold text-pink-500">₹9,000</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Activities
              </p>
            </div>

            <div
              className={`${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}
            >
              <h3 className="text-2xl font-bold text-yellow-500">₹6,000</h3>

              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-slate-600"
                } mt-3`}
              >
                Food & Transport
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
