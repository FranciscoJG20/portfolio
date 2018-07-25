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

        <h3>Building Community</h3>
        <h3>Building Experiences</h3>
        <h3>Building Tools</h3>

        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
