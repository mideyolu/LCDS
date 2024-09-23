import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <div className="logo">
          <img src="/logo.jpg" width="50" alt="Logo" />
          <span>
            Res<span>pirix</span>
          </span>
        </div>
        <div className="col2">
          <div className="sub_col1">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
          <div className="sub_col2">
            <a href="/detect">Detection</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="info">
        &copy; AI Powered Lung Canacer Detection System
      </div>
    </div>
  );
}

export default Footer;
