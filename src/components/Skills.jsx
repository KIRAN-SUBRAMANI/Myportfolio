import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Technical Skills</h2>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/src/assets/C_Programming_Language.svg.png" alt="C" />
                <span>C</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/javascript.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/python.jpeg" alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Front-End */}
          <div className="skill-category">
            <h3>Front-End</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/src/assets/html.png" alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/css.png" alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/react.png" alt="React" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Back-End */}
          <div className="skill-category">
            <h3>Back-End</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/src/assets/spring.png" alt="Spring" />
                <span>Spring</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/mongodb.png" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/sql.png" alt="SQL" />
                <span>SQL</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/src/assets/github.png" alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <img src="/src/assets/vscode.png" alt="VS Code" />
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
