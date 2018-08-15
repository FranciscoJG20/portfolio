import React, { Component } from "react";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <h3>
          <a
            href="https://drive.google.com/file/d/0B1mGkf2ZbU1jdnduY1Z3UDEwZTEyeUVtY0VJdll0eGFFeUhZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            view pdf version
          </a>
        </h3>

        <iframe
          id="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vRXFPlpWdrjciyYBnnKPtr2yG7dcdD03GGXWfah8dVtGgtfhg57SK54Cd0ECmuvpS4KSpDj6f6iKAyy/pub?embedded=true"
          style={{ width: "1000px", height: "600px", border: "none" }}
        />
      </div>
    );
  }
}

export default Resume;
