const FormComponent = ({ children, imageSrc, altText }) => {
  return (
    <div className="form-container">
      <div className="form-main">
        <div className="form-content">{children}</div>
        <div className="form-image">
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
