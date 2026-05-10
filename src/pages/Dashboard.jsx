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

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      } min-h-screen`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="p-10">
        <h1 className="text-5xl font-bold mb-10">My Trips</h1>

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

              <p className="text-gray-400">
                {trip.startDate} → {trip.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
