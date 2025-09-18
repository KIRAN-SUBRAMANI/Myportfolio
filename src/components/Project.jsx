import React from "react";

const PROJECTS = [
  {
    title: "College Project",
    desc: "A College project developed as part of my coursework. It focuses on building clean, user-friendly websites using JavaScript, solving real-world problems through code.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://college-project-eosin-eta.vercel.app/", // you can link to a deployed demo if available
    code: "https://github.com/KIRAN-SUBRAMANI/College_Project", // or GitHub repo if uploaded
  },
  {
    title: "Astrology Services Portfolio",
    desc: "React-based astrology portfolio website highlighting key spiritual services, testimonials, and interactive contact features.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    live: "https://astrology-portfolio-three.vercel.app/",
    code: "https://github.com/KIRAN-SUBRAMANI/Astrology_Portfolio"
  },
  {
    title: "QuizCraft",
    desc: "Creates quizzes from pasted text; export to CSV/PDF. Keyboard-first UX.",
    tech: ["React", "Vite"],
    live: "#",
    code: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="card-grid">
          {PROJECTS.map(p => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="tagline">{p.tech.join(" · ")}</p>
              <div className="card__links">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn small primary-btn"
                >
                  Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn small secondary-btn"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
