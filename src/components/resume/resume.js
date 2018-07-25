import React, { Component } from "react";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <iframe
          id="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQ-VgF6RiNeFgGqdmSgppLcj4qSYqOXtLAZ7SEom0ZT68I6j2-5xcNKK-Vr4WyG8cI6JDiHq8rHiOsi/pub?embedded=true"
          style={{ width: "550px", height: "500px", border: "none" }}
        />
      </div>
    );
  }
}

export default Resume;
