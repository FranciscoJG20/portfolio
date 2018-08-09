import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div id="bio">
        <img class="bio-photos" src="picture1.JPG" />

        <p id="bio-p">
          I'm a full stack developer with a strong operations management
          background. I understand the complexities of starting from the ground,
          and wish to have a long-term social impact. I am adventurous,
          entrepreneurial, and find motivation in being a compassionate and
          authentic human being.
        </p>
      </div>
    );
  }
}

export default About;
