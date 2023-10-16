// About.js

import React from "react";
import { LogIn, CreateAccount } from "../buttons";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section className="container">
      <div className="about-content">
        <h1 className="title">About Us</h1>
        <p className="subtitle">
          A modern application designed to help you create and send invoices to your clients effortlessly.
        </p>
        <div className="features">
          <h2 className="features-title">Key Features:</h2>
          <ul className="features-list">
            <li>Create invoices with ease</li>
            <li>Access detailed invoice reports</li>
            <li>Real-time view of your financial data</li>
            <li>Download invoice reports in various formats</li>
          </ul>
        </div>
        <div className="buttons-container">
          <CreateAccount className="button" />
          <LogIn className="button" />
        </div>
      </div>
    </section>
  );
};

export default About;
