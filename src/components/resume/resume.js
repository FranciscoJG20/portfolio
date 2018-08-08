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
          >
            view pdf version
          </a>
        </h3>

        <iframe
          id="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQ-VgF6RiNeFgGqdmSgppLcj4qSYqOXtLAZ7SEom0ZT68I6j2-5xcNKK-Vr4WyG8cI6JDiHq8rHiOsi/pub?embedded=true"
          style={{ width: "900px", height: "500px", border: "none" }}
        />
      </div>
    );
  }
}

export default Resume;
