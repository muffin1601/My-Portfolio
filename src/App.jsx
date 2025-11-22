import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="body-sect">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
