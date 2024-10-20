import "./AboutPage.scss";
import { steps } from "../../api/steps";


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
    </div>
  );
};

export default AboutPage;
