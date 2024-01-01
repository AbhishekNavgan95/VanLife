import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Vans from "./pages/Vans";
import Van from "./pages/Van";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Van />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
