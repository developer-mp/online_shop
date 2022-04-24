import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
import { useSelector } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };
  return (
    <div className="register">
      <div className="register-wrapper">
        <h1 className="register-title">Create account</h1>
        <form className="register-form">
          <p>Username</p>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Email</p>
          <input
            placeholder="E-mail address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Confirm password</p>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister} disabled={isFetching}>
            Create
          </button>
          {error && <span>Something is wrong...</span>}
        </form>
      </div>
      <div className="register-signin">
        <p>
          Already have an account?
          <Link to="/login">
            <span> Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
