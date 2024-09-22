import ServiceIntro from "../../components/ServiceIntro/ServiceIntro";
import "./HomePage.scss";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  return (
    <div className="Page">
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <div className="title">
              <h3>
                Seamless AI-Powered
                <span className="sub-text">Lung Cancer</span>
                Detection System!{" "}
              </h3>
              <p className="text">
                Streamline Lung Cancer Diagnosis with a platform powered by AI!
              </p>
              <a href="/" className="btn">
                Try it Now
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src="/h1.jpg" alt="" />
        </div>
      </div>

      <ServiceIntro />
    </div>
  );
}

export default HomePage;
