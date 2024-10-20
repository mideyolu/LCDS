import { features } from "../../api/steps";
import DetectionForm from "../../components/FormAuth/DetectionForm";
import './Detection.scss'

const DetectionPage = () => {
  return (
    <div className="detect">
      <div className="detect-features">
        <h5>
          Classify <span>Lung</span> Cancer
        </h5>

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="grid-item">
              <h6>{feature.title}</h6>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="form-content">
        <h5>
          Scan <span>Upload</span>
        </h5>
        <div className="form-instrctions">
          <p>Fill</p>
          <p>Fill</p>
        </div>
        <DetectionForm>
          <form>
            <div className="form-group">
              <label htmlFor="fullname">Patient Name:</label>
              <input type="text" name="fname" placeholder="FullName" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Patinet Gender:</label>
              <input type="radio" name="gender" placeholder="Gender" /> Male
              <input type="radio" name="gender" placeholder="Gender" /> Female
            </div>
            <div className="form-group">
              <label htmlFor="age">Patient Age:</label>
              <input type="number" name="age" placeholder="Age" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Patient Email:</label>
              <input type="email" name="email" placeholder="Email" />
              <span>Disclaimer we will never share your email with anyone</span>
            </div>
            <div className="form-group">
              <label htmlFor="ctscan">CT Scan Image Input:</label>
              <input type="file" accept="image/jpeg, image/png, image/jpg" />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes:</label>
              <textarea name="notes" placeholder="Notes" />
            </div>
            <button type="submit">Get Classification</button>{" "}
          </form>
        </DetectionForm>
      </div>
    </div>
  );
};

export default DetectionPage;

// <div>
//   <h2>Patient Management</h2>
//   <form>
//     <input type="text" name="name" placeholder="Name" />
//     <input type="text" name="gender" placeholder="Gender" />
//     <input type="number" name="age" placeholder="Age" />
//     <textarea name="notes" placeholder="Notes" />
//     <button type="submit">Add Patient</button>
//   </form>

//   <h2>Upload CT Scan</h2>
//   <form>
//     <input type="file" accept="image/jpeg, image/png" />
//     <button type="submit">
//       {/* {loading ? "Analyzing..." : "Upload CT Scan"} */}
//     </button>
//   </form>

//   {/* {analysisResult && (
//   <div>
//     <h3>Analysis Result:</h3>
//     <p>Status: {analysisResult.status}</p>
//     <p>Probability: {analysisResult.probability}%</p>
//   </div>
// )} */}
// </div>;
