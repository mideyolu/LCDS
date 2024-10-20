import "./serviceIntro.scss";
import {service} from "../../api/service"

function ServiceIntro() {
  return (
    <div className="serviceIntro">
      <h4>Built for Advanced AI-Driven Lung Cancer Detection</h4>
      <div className="gridContainer">
        {service.map((step, index) => (
          <div className="item" key={index}>
            <img src={step.img} width="150" alt="" />
            <div className="caption">
              <h5>{step.caption}</h5>
              <p className="sub_caption">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ServiceIntro;


