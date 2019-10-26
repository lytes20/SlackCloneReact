import React from "react";
import "../../assets/styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <h1>Sign in to your workspace</h1>
        <form>
          <input type="text" placeholder="Workspace Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Continue" />
        </form>
        <p>
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
