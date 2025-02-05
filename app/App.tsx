import { useEffect } from "react";
import { ModalProvider } from "./shared/contexts/ModalContext";
import Navbar from "./components/organisms/Navbar/Navbar";
import About from "./pages/About/About";
import Activities from "./pages/Activities/Activities";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n/config";
import { LoadScript } from "@react-google-maps/api";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard/Dashboard";
import ProtectedRoute from "./shared/contexts/ProtectedRoute";

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    // Initialize language from localStorage or default
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <Router>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <ModalProvider>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destination />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </ModalProvider>
      </LoadScript>
    </Router>
  );
};

export default App;
