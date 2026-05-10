import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Dashboard({ darkMode, setDarkMode }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await api.get("/trips");

      setTrips(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTrip = async (id) => {
    try {
      await api.delete(`/trips/${id}`);

      fetchTrips();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      } min-h-screen`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="p-10">
        <h1 className="text-5xl font-bold mb-10">My Trips</h1>

        {trips.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-3xl font-bold mb-4">No Trips Yet ✈️</h2>

            <p className="text-gray-400 mb-8 text-lg">
              Start planning your next adventure.
            </p>

            <button
              onClick={() => (window.location.href = "/create")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
            >
              + Create New Trip
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {trips.map((trip, index) => (
              <div
                key={index}
                className={`${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200 shadow-lg"
                } p-6 rounded-3xl border`}
              >
                <h2 className="text-2xl font-bold mb-3">{trip.title}</h2>

                <p className="text-gray-400 mb-2">Budget: ₹{trip.budget}</p>

                <p className="text-gray-400 mb-6">
                  {trip.startDate} → {trip.endDate}
                </p>

                <button
                  onClick={() => deleteTrip(trip._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
