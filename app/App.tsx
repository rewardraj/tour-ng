import { Suspense, useEffect, useState } from "react";
import Navbar from "./components/organisms/Navbar/Navbar";
import About from "./pages/About/About";
import Activities from "./pages/Activities/Activities";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n/config"; // Ensure i18n is initialized
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { LoadScript } from "@react-google-maps/api";

export function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

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
    <Suspense fallback={LinearDeterminate()}>
      <Router>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destination />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
            </Routes>
          </main>
        </LoadScript>
      </Router>
    </Suspense>
  );
};

export default App;
