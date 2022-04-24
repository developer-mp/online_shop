import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <h1 className="login-title">Sign-In</h1>
        <form className="login-form">
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span>Something is wrong...</span>}
          <p>Forgot the password?</p>
        </form>
      </div>
      <div className="login-new-account">
        <p>New to the website?</p>
        <Link to="/register">
          <button>Create an account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
