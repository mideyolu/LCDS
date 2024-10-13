import "./login.scss";
import {} from "react-icons/fa";

function Login() {
  return (
    <div className="login-form">
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Login</h2>
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
              Don't Have An Account? <a href="/signup">Register</a>
            </p>
        </div>



        <div className="form-img">
            <img src="/Login.jpg" alt="Login Background" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
