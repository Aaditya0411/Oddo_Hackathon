import Navbar from "../components/Navbar"

function Itinerary({ darkMode, setDarkMode }) {

  return (

    <div className={`${darkMode
      ? "bg-slate-950 text-white"
      : "bg-slate-100 text-slate-900"
      } min-h-screen`}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />



      <div className="p-10">

        {/* Header */}

        <div className="flex items-center justify-between mb-12">

          <div>

            <h1 className="text-5xl font-bold">
              Paris Adventure
            </h1>

            <p className={`${darkMode
              ? "text-gray-400"
              : "text-slate-600"
              } mt-3`}>
              5 Days Travel Plan
            </p>

          </div>



          <button className="bg-green-600 text-white px-6 py-3 rounded-2xl">
            Budget: ₹45,000
          </button>

        </div>



        {/* Timeline Cards */}

        <div className="space-y-8">

          {/* Day 1 */}

          <div className={`${darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}>

            <h2 className="text-3xl font-bold mb-4">
              Day 1 — Paris
            </h2>

            <div className={`${darkMode
              ? "text-gray-300"
              : "text-slate-700"
              } space-y-3`}>

              <p>• Visit Eiffel Tower</p>

              <p>• Seine River Cruise</p>

              <p>• Dinner at Local Cafe</p>

            </div>

          </div>



          {/* Day 2 */}

          <div className={`${darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}>

            <h2 className="text-3xl font-bold mb-4">
              Day 2 — Louvre Museum
            </h2>

            <div className={`${darkMode
              ? "text-gray-300"
              : "text-slate-700"
              } space-y-3`}>

              <p>• Museum Tour</p>

              <p>• Shopping Street Visit</p>

              <p>• Night Photography</p>

            </div>

          </div>



          {/* Day 3 */}

          <div className={`${darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200 shadow-lg"
            } p-8 rounded-3xl border`}>

            <h2 className="text-3xl font-bold mb-4">
              Day 3 — Disney Land
            </h2>

            <div className={`${darkMode
              ? "text-gray-300"
              : "text-slate-700"
              } space-y-3`}>

              <p>• Theme Park Rides</p>

              <p>• Food Festival</p>

              <p>• Evening Show</p>

            </div>

          </div>

        </div>



        {/* Budget Breakdown */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold mb-8">
            Budget Breakdown
          </h2>



          <div className="grid md:grid-cols-4 gap-6">

            <div className={`${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}>

              <h3 className="text-2xl font-bold text-blue-500">
                ₹18,000
              </h3>

              <p className={`${darkMode
                ? "text-gray-400"
                : "text-slate-600"
                } mt-3`}>
                Flights
              </p>

            </div>



            <div className={`${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}>

              <h3 className="text-2xl font-bold text-green-500">
                ₹12,000
              </h3>

              <p className={`${darkMode
                ? "text-gray-400"
                : "text-slate-600"
                } mt-3`}>
                Hotels
              </p>

            </div>



            <div className={`${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}>

              <h3 className="text-2xl font-bold text-pink-500">
                ₹9,000
              </h3>

              <p className={`${darkMode
                ? "text-gray-400"
                : "text-slate-600"
                } mt-3`}>
                Activities
              </p>

            </div>



            <div className={`${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-lg"
              } p-6 rounded-3xl border`}>

              <h3 className="text-2xl font-bold text-yellow-500">
                ₹6,000
              </h3>

              <p className={`${darkMode
                ? "text-gray-400"
                : "text-slate-600"
                } mt-3`}>
                Food & Transport
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Itinerary