import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function CreateTrip({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/trips", {
        title,
        startDate,
        endDate,
        budget,
      });

      console.log(response.data);

      alert("Trip Created Successfully!");

      navigate("/itinerary", {
        state: {
          title,
          budget,
          startDate,
          endDate,
        },
      });
    } catch (error) {
      console.log(error);

      alert("Backend connection failed");
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
        <h1 className="text-5xl font-bold mb-10">Create New Trip</h1>

        <div
          className={`${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-lg"
          } max-w-3xl p-10 rounded-3xl border`}
        >
          {/* Trip Name */}

          <div className="mb-6">
            <label
              className={`${
                darkMode ? "text-gray-300" : "text-slate-700"
              } block mb-2`}
            >
              Trip Name
            </label>

            <input
              type="text"
              placeholder="Enter trip name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-900"
              } w-full p-4 rounded-xl outline-none`}
            />
          </div>

          {/* Dates */}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className={`${
                  darkMode ? "text-gray-300" : "text-slate-700"
                } block mb-2`}
              >
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={`${
                  darkMode
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-900"
                } w-full p-4 rounded-xl outline-none`}
              />
            </div>

            <div>
              <label
                className={`${
                  darkMode ? "text-gray-300" : "text-slate-700"
                } block mb-2`}
              >
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={`${
                  darkMode
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-900"
                } w-full p-4 rounded-xl outline-none`}
              />
            </div>
          </div>

          {/* Budget */}

          <div className="mb-8">
            <label
              className={`${
                darkMode ? "text-gray-300" : "text-slate-700"
              } block mb-2`}
            >
              Estimated Budget
            </label>

            <input
              type="number"
              placeholder="Enter budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-900"
              } w-full p-4 rounded-xl outline-none`}
            />
          </div>

          {/* Button */}

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition-all duration-300"
          >
            Generate Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
