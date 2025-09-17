import React from "react";
import "./App.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title">Education</h2>

        <div className="timeline-item">
          <div className="timeline-head">
            <h3>Wilmington University</h3>
            <span className="muted">
              Master of Science in Information Systems Technologies – Internet/Web Design · Sep 2024 – Dec 2025
            </span>
          </div>
          <ul className="list">
            <li>GPA: 3.72 / 4.0</li>
            <li>
              Coursework: Cloud Management, Web Design with JavaScript, Data Management, 
              Data Communications and Networking, Project and Chain Management
            </li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="timeline-head">
            <h3>Gopalan College of Engineering and Management</h3>
            <span className="muted">
              Bachelor of Technology in Electronics and Communication Engineering · Jul 2019 – May 2023
            </span>
          </div>
          <ul className="list">
            <li>CGPA: 8.04 / 10</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
