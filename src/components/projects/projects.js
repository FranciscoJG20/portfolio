import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="flexbox-container">
          <div className="flex-item">
            <a
              href="https://franciscojg20.github.io/rugratsgame/"
              target="_blank"
            >
              <img
                src="project1.png"
                alt="screenshot of a Rugrats themed memory card game"
              />
            </a>
          </div>
          <div class="flex-item">
            <a href="https://biasreporting.herokuapp.com" target="_blank">
              <img
                src="project2.png"
                alt="screenshot of a bias reporting application"
              />
            </a>
          </div>

          <div class="flex-item">
            <a href="http://fitnessfriends.surge.sh/" target="_blank">
              <img
                src="project3.png"
                alt="screenshot of a fitness social network"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
