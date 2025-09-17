import React from "react";
import "./App.css";

const EXPERIENCES = [
  {
    org: "Yosi Innovation Private Ltd – India",
    role: "Front-end Developer",
    time: "Jun 2023 – Nov 2024",
    points: [
      "Built and optimized reusable UI components in React, HTML5, CSS, JavaScript, improving page load speed by ~25%.",
      "Collaborated with backend team to integrate REST APIs, improving data rendering efficiency and reducing bugs by 30%.",
      "Automated unit testing pipeline to improve release quality; reduced manual QA cycles by 20%.",
      "Mentored interns on UI best practices and GitHub workflows, increasing team productivity."
    ]
  },
  {
    org: "Greet Labs Pvt Ltd",
    role: "Full Stack Intern",
    time: "Feb 2023 – Apr 2023",
    points: [
      "Worked on “Ecommerce Electronics Appliance” project under the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed and integrated frontend and backend modules ensuring smooth user experience and functionality.",
      "Gained hands-on experience with REST APIs, database management, and deployment practices."
    ]
  }
];

const PROJECTS = [
  {
    title: "Good Dog – Responsive Website & UI Components",
    time: "Jun 2025 – Aug 2025",
    points: [
      "Built a fully responsive, multi-section website (“Good Dog”) using React, JavaScript (ES6), and Bootstrap, with reusable UI components and semantic HTML for accessibility.",
      "Improved speed and maintainability with lightweight JS, optimized images (WebP/AVIF), and a small design-token system (CSS variables) for consistent styling."
    ]
  },
  {
    title: "Astrology Portfolio Website",
    time: "Jun 2024 – Jan 2025",
    points: [
      "Developed a responsive portfolio website using React.js, modular CSS, and component-based architecture.",
      "Enhanced user experience with Framer Motion animations, interactive banners, testimonials, and service sections.",
      "Optimized project for scalability and deployment, integrating React Router, React Icons, and environment configurations."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-head">
              <h3>{exp.role}</h3>
              <span className="muted">{exp.org} · {exp.time}</span>
            </div>
            <ul className="list">
              {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}

        <h2 className="section__title" style={{ marginTop: "2rem" }}>Projects</h2>
        {PROJECTS.map((proj, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-head">
              <h3>{proj.title}</h3>
              <span className="muted">{proj.time}</span>
            </div>
            <ul className="list">
              {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
