import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div class="flexbox-container">
          <div class="flex-item">
            <img
              src="project1.png"
              alt="screenshot of a Rugrats themed memory card game"
            />
          </div>

          <p>
            <strong class="project-title">Rugrats-themed Memory Game</strong>
            <br />
            <br />
            <div class="links">
              <a
                href="https://franciscojg20.github.io/rugratsgame/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/FranciscoJG20/rugratsgame/tree/gh-pages"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <br />
            This was my first project, which I built using HTML, CSS and
            JavaScript. It's fun -- give it a try!
          </p>

          <div class="flex-item">
            <img
              src="project2.png"
              alt="screenshot of a bias reporting application"
            />
          </div>
          <p>
            <strong class="project-title">Bias Reporting Application</strong>
            <br />
            <br />
            <div className="links">
              <a
                href="https://biasreporting.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/FranciscoJG20/BRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <br />
            BRA is a company wide tool to empower employees to report
            bias-related incidents in the workplace. I integrated HTML, CSS, and
            JavaScript. The backend is a custom NodeJS/ExpressJS built server
            with a MongoDB for data storage.
          </p>
          <br />

          {/* <div class="flex-item">
            <img
              src="project3.png"
              alt="screenshot of a fitness social network"
            />
          </div>

          <p>
            <strong class="project-title">Fitnes Friends</strong>
            <br />
            <br />
            <div className="links">
              <a
                href="http://fitnessfriends.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/lenelow/fitness-friends"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <br />
            Fitness Friends is a two-server, MERN stack app that allows fitness
            enthusiasts to find workout partners. I built it with two other
            developers following the Gitflow workflow.
          </p>
          <br />
        </div> */}

        <div class="flex-item">
          <img src="project4.png" alt="screenshot of pear-review homepage" />
        </div>

        <p>
          <strong class="project-title">Pear-Review Code</strong>
          <br />
          <br />
          <div className="links">
            <a
              href="https://pear-review.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/FranciscoJG20/pear_review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <br />
          Pear-Review Code is a pair-programming tool built on Python with
          Django and PostgreSQL. I implemented full CRUD on app models and
          included social authentication (Github).
        </p>
        <br />
      </div>
    );
  }
}

export default Projects;
