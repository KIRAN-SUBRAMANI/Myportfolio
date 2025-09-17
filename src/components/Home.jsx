import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Kiran Subramani</span>{" "}
          <span className="wave" aria-hidden="true">👋</span>
        </h1>
        <p className="home-subtitle">
          Software Developer | Full Stack Developer
        </p>
        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
