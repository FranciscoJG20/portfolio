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
        <h1>Francisco Vince Gutierrez</h1>
        <nav className="navbar">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
        </nav>
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
