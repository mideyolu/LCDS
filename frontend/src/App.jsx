import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import AboutPage from "./routes/AboutPage/AboutPage";
import DetectionPage from "./routes/DetectionPage/DetectionPage";
import HomePage from "./routes/HomePage/HomePage";
import { Routes, Route, Link, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/about" element={<AboutPage />} />
          <Route index path="/detect" element={<DetectionPage />} />
        </Routes>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default App;
