import { Suspense, useEffect } from "react";
import Navbar from "./components/organisms/Navbar/Navbar";
import About from "./pages/About/About";
import Activities from "./pages/Activities/Activities";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n/config"; // Ensure i18n is initialized

const LoadingSpinner = () => <div>Loading...</div>;

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
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
      </Router>
    </Suspense>
  );
};

export default App;
