import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.jpg" alt="Logo" />
          <span>
            Res<span>pirix</span>
          </span>
        </a>

        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <a href="/login">Get Started</a>
        </div>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Get Started</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
