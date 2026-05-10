import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import Itinerary from "./pages/Itinerary";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          <Route
            path="/dashboard"
            element={
              <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />

          <Route
            path="/create"
            element={
              <CreateTrip darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />

          <Route
            path="/itinerary"
            element={
              <Itinerary darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
