import React from "react";
import "./Skills.css";

// Languages
import cLogo from "../assets/C_Programming_Language.svg.png";
import jsLogo from "../assets/javascript.png";
import pyLogo from "../assets/python.jpeg";

// Front-End
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import reactLogo from "../assets/react.png";

// Back-End
import springLogo from "../assets/spring.png";
import mongoLogo from "../assets/mongodb.png";
import sqlLogo from "../assets/sql.png";

// Tools
import githubLogo from "../assets/github.png";
import vscodeLogo from "../assets/vscode.png";

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
                <img src={cLogo} alt="C" />
                <span>C</span>
              </div>
              <div className="skill-item">
                <img src={jsLogo} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={pyLogo} alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>

          {/* Front-End */}
          <div className="skill-category">
            <h3>Front-End</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src={htmlLogo} alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src={cssLogo} alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Back-End */}
          <div className="skill-category">
            <h3>Back-End</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src={springLogo} alt="Spring" />
                <span>Spring</span>
              </div>
              <div className="skill-item">
                <img src={mongoLogo} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <img src={sqlLogo} alt="SQL" />
                <span>SQL</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src={githubLogo} alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <img src={vscodeLogo} alt="VS Code" />
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
