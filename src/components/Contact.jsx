 import React from "react";
 import kiran from "../assets/Kiran_Subramani.pdf";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="muted">
          Open to internships and junior roles. Feel free to reach out!
        </p>
        <div className="contact-row">
          <a href="mailto:kiransubramani0708@gmail.com" className="btn primary-btn">Email Me</a>
          <a href="https://www.linkedin.com/in/kiran-subramani6199/" target="_blank" rel="noreferrer" className="btn secondary-btn">LinkedIn</a>
          <a href={kiran} className="btn secondary-btn">Resume</a>
        </div>
      </div>
    </section>
  );
}
