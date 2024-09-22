import "./serviceIntro.scss";

function ServiceIntro() {
  return (
    <div className="serviceIntro">
      <div className="gridContainer">
        <div className="item">
          <img src="/h2.png" width="150" alt="" />
          <p>Form Filling</p>
        </div>
        <div className="item">AI Image Analyzer</div>
        <div className="item">
          <img src="/h3.png" width="150" alt="" />
          <p>Report Generation</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceIntro;
