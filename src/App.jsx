import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import SocialMedia from "./pages/socialMedia";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
