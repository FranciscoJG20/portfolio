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
          <Link to="/">Francisco Gutierrez </Link>
        </h1>
        <h2 style={{ color: "#f47741" }}>
          SOFTWARE ENGINEER | DIVERSITY ADVOCATE
        </h2>
        <nav className="navbar">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>

        <footer>
          <a
            href="https://github.com/FranciscoJG20"
            class="fab fa-github"
            alt="github icon"
          />
          <a
            href="https://www.linkedin.com/in/franciscojgutierrez"
            class="fab fa-linkedin-in"
            alt="linkedin icon"
          />
          <a
            href="https://medium.com/@franciscogu"
            class="fab fa-medium-m"
            alt="medium icon"
          />
        </footer>

        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
