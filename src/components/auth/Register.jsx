import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="form-container">
        <h1>Sign in to your workspace</h1>
        <form>
          <input type="text" placeholder="Workspace Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Sign Up"/>
        </form>
        <p>
          Already using New Slack? <Link to="/login">Sign here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
