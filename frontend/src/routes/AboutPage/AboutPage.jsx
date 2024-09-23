import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      {/* Project Overview */}
      <section className="overview">
        <h2>Project Overview</h2>
        <p>
          Our Lung Cancer Detection System leverages advanced artificial
          intelligence to assist medical professionals in detecting lung cancer
          from CT scans with greater precision and speed.
        </p>
      </section>

      {/* Purpose and Mission */}
      <section className="purposeMission">
        <h2>Purpose and Mission</h2>
        <div className="content">
          <div className="purpose">
            <h4>Purpose</h4>
            <p>
              We aim to enhance diagnostic accuracy, streamline patient data
              processing, and provide timely results, helping healthcare
              providers make more informed decisions.
            </p>
          </div>
          <div className="mission">
            <h4>Mission</h4>
            <p>
              To harness AI technology for improving early detection and
              survival rates for lung cancer patients.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="techStack">
        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>AI & Machine Learning:</strong> Powered by a pre-trained
            MobileNetV2 model fine-tuned for multi-class classification.
          </li>
          <li>
            <strong>Backend:</strong> Built using FastAPI, a modern, fast web
            framework for building APIs with Python.
          </li>
          <li>
            <strong>Frontend:</strong> The UI is crafted with React for dynamic
            and responsive interactions.
          </li>
          <li>
            <strong>Styling:</strong> SCSS is used to provide a visually
            appealing and responsive design across screen sizes.
          </li>
        </ul>
      </section>

      {/* Key Features */}
      <section className="keyFeatures">
        <h2>Key Features</h2>
        <ul>
          <li>Efficient form-filling for quick input of patient details.</li>
          <li>AI-driven analyzer for processing CT scan images.</li>
          <li>
            Automatic generation of comprehensive reports based on analysis.
          </li>
          <li>Highly accurate results for reliable decision-making.</li>
        </ul>
      </section>

      {/* Team Section - Slider */}
      <section className="team">
        <h2>Our Team</h2>
        <div className="sliderContainer">
          {/* Add your slider library here */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
