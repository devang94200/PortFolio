import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer
import Home from "../src/pages/Home";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation(); // Now inside the BrowserRouter context

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#152238]">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer at the bottom, only render if not on the home route */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
