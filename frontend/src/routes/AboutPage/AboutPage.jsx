import "./AboutPage.scss";


const steps = [
  {
    title: "Project Overview",
    description:
      "Our Lung Cancer Detection System leverages advances in AI to assist medical professionals in detecting lung cancer from CT scans with greater precision and speed.",
  },
  {
    title: "Technology Stack",
    description:
      "Our Lung Cancer Detection System is implemented using the following key development tools",
    list: [
      "TensorFlow - for building the deep learning models",
      "Keras - for high-level neural networks APIs",
      "OpenCV - for image preprocessing and augmentation",
      "FastApi - for creating the web server",
      "React - for building the frontend",
    ],
  },
  {
    title: "Mission",
    description:
      "To harness AI technology for improving early detection and survival rates for lung cancer patients by providing:",
    list: [
      "Efficient form-filling for quick input of patient details",
      "Automatic generation of comprehensive reports based on analysis.",
      "AI-driven analyzer for processing CT scan images",
    ],
  },
];

const AboutPage = () => {
  return (
    <div className="about">
      <div className="page">
        {steps.map((step, index) => (
          <div
            className={`page-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
              {step.list && (
                <ul>
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="circle"></div>
          </div>
        ))}
      </div>

      <div>
        <h3>Our Team</h3>
      </div>
    </div>
  );
};

export default AboutPage;
