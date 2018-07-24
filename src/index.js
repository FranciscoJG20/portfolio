import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

//The Virtual DOM is a Javascript representation of the actual DOM.
//The virtual DOM is a staging area for changes that will eventually be implemented.
