import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/landingpage.css";

const Landing = () => {
  return (
    <div>
      <header>
        <h1>New Slack</h1>
      </header>
      <section className="landing-main">
        <div className="landing-line-container">
          <p className="landing-line">
            Whatever work you do, you can do it in this New Slack
          </p>
        </div>
        <button>Try it</button>
        <p className="p-sign-in-prompt">
          Already using Slack? <Link to="/login">Sign in.</Link>
        </p>
      </section>
    </div>
  );
};

export default Landing;
