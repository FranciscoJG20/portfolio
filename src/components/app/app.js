import React, { Component } from "react";
import "./app.css";
import About from "../about/about";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>
          <Link to="/about">Francisco Gutierrez </Link>
        </h1>
        <h2 style={{ color: "#f47741" }}>
          SOFTWARE ENGINEER | DIVERSITY ADVOCATE
        </h2>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <br />
        <footer>
          <a
            href="https://github.com/FranciscoJG20"
            class="fab fa-github"
            alt="github icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            href="https://www.linkedin.com/in/franciscojgutierrez"
            class="fab fa-linkedin-in"
            alt="linkedin icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            href="https://medium.com/@franciscogu"
            class="fab fa-medium-m"
            alt="medium icon"
            target="_blank"
            rel="noopener noreferrer"
          />
        </footer>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
