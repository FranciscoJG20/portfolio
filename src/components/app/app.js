import React, { Component } from "react";
import "./app.css";
import About from "../about/about";
import Projects from "../projects/projects";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Projects /> */}
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
        </nav>

        <h2>Building Community</h2>
        <h2>Building Experiences</h2>
        <h2>Building Tools</h2>

        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
