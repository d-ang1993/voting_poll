import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="landing">
      <h1 className="x-large"> Polling Votes! </h1>
      <p>Vote for a poll</p>
      <div className="buttons">
        <Link to="/register">Register</Link>
        <Link to="/login"> Login</Link>
      </div>
    </section>
  );
};

export default Landing;
