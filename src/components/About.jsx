import React from "react";
import "./About.css"; // if you keep styles separate

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        {/* Replace gradient with your actual image */}
        <div className="about__photo">
          <img src="/src/assets/my-pic.jpeg" alt="Kiran portrait" />
        </div>

        <div>
          <h2 className="section__title">About Me</h2>
          <p>
            I am a Computer Science student with a strong passion for building clean, user-friendly websites. I enjoy working with React and JavaScript to solve real-world problems through code, and I am seeking an internship opportunity where I can contribute effectively, learn quickly, and deliver impactful features.
          </p>
          <ul className="about__bullets">
            <li>Strong basics: HTML, CSS, JavaScript</li>
            <li>Frontend: React (hooks, router)</li>
            <li>Backend (basics): Node/Express</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
