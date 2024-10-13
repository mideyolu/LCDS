import './signup.scss'

import {} from "react-icons/fa";

function Signup() {
  return (
    <div className="login-form">
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Signup</h2>
            <form action="#" method="post">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                required
                autoFocus
              />
              <input
                type="password"
                name="password"
                placeholder="User Password"
                required
                autoFocus
              />
              <button className="btn" type="submit">
                Login
              </button>
            </form>
            <p className="account">
              Already Have An Account? <a href="/login">Sigin</a>
            </p>
          </div>

          <div className="form-img">
            <img src="/signup.jpg" alt="Signup Background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
