import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";
import AboutPage from "./routes/AboutPage/AboutPage";
import Login from "./components/LoginPage/Login";
import Signup from './components/SignupPage/Signup'
import DetectionPage from "./routes/DetectionPage/DetectionPage";
import HomePage from "./routes/HomePage/HomePage";
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
            <Route index path="/about" element={<AboutPage />} />
            <Route index path="/detect" element={<DetectionPage />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <div className="">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};

export default App;
