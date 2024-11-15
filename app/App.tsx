import Navbar from "./components/organisms/Navbar/Navbar";
import About from "./pages/About/About";
import Activities from "./pages/Activities/Activities";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
