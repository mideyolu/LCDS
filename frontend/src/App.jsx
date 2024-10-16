import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import AboutPage from "./routes/AboutPage/AboutPage";
import Login from "./routes/LoginPage/Login";
import Signup from "./routes/SignupPage/Signup";
import DetectionPage from "./routes/DetectionPage/DetectionPage";
import HomePage from "./routes/HomePage/HomePage";
import Faq from "./routes/FAQ/Faq";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];

  return (
    <div className="">
      <div className="layout">
        <div className="navbar">
          {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        </div>

        <div className="content">
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/detect" element={<DetectionPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <div className="">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};

export default App;
