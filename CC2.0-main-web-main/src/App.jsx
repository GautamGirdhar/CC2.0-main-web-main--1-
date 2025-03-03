import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

import TeamRegistrationForm from "./pages/TeamRegistrationForm";
import Rules from "./pages/Rules";
import Landing from "./pages/Here";

import Footer from "./components/Footer";
import "./App.css";

import About from "./pages/About";
import FAQs from "./pages/FAQ";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<TeamRegistrationForm />} />{" "}
            {/* Add this route */}
            <Route path="/rules" element={<Rules />} /> {/* Add this route */}
            <Route path="/here" element={<Landing />} /> {/* Add this route */}
            {/* Add this route */}
            <Route path="/about" element={<About />} /> {/* Add this route */}
            <Route path="/faqs" element={<FAQs />} /> {/* Add this route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
