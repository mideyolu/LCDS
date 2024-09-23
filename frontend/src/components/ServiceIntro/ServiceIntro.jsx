import "./serviceIntro.scss";

function ServiceIntro() {
  return (
    <div className="serviceIntro">
      <h4>Built for Advanced AI-Driven Lung Cancer Detection</h4>
      <div className="gridContainer">
        <div className="item">
          <img src="/h2.png" width="150" alt="" />
          <p className="caption">
            Form Filling
            <span className="sub_caption">
              Quickly input patient details with our streamlined form interface.
            </span>
          </p>
        </div>
        <div className="item">
          <img src="/h4.png" width="150" alt="" />
          <p className="caption">
            AI Image Analyzer
            <span className="sub_caption">
              Utilize advanced AI to analyze CT scan images for precise results.
            </span>
          </p>
        </div>
        <div className="item">
          <img src="/h3.png" width="150" alt="" />
          <p className="caption">
            Report Generation
            <span className="sub_caption">
              Receive comprehensive reports automatically generated from the
              analysis.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceIntro;
