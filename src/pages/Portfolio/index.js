import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <div id="top" class="card">
      <div class="card-body">
        <h1 class="font-weight-bold text-center">Portfolio</h1>
        <br />
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="card project">
              <div class="card_title">
                <h3>Party Planner</h3>
                <div class="card_links">
                  <a
                    href=" https://sassypigeon.github.io/Party_Planning_Committee/home.html"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Party_Planning_Committee"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/ppc.png" alt="" />
            </div>
            <div class="card project">
              <div class="card_title">
                <h3>Weather App</h3>
                <div class="card_links">
                  <a
                    href="https://sassypigeon.github.io/Weather_App/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Weather_App"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/weather.png" alt="" />
            </div>
            <div class="card project">
              <div class="card_title">
                <h3>Password Generator</h3>
                <div class="card_links">
                  <a
                    href="https://sassypigeon.github.io/Password_Generator/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Password_Generator/"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/password.png" alt="" />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="card project">
              <div class="card_title">
                <h3>Parent Connect</h3>
                <div class="card_links">
                  <a
                    href="https://project-mcginnis.herokuapp.com/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Parent-Connect"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/parent_connect.png" alt="" />
            </div>
            <div class="card project">
              <div class="card_title">
                <h3>Code Quiz</h3>
                <div class="card_links">
                  <a
                    href="https://sassypigeon.github.io/Code_Quiz/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Code_Quiz"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/quiz.png" alt="" />
            </div>
            <div class="card project">
              <div class="card_title">
                <h3>Eat-Da-Burger!</h3>
                <div class="card_links">
                  <a
                    href="https://enigmatic-headland-31182.herokuapp.com/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/sassypigeon/Eat-Da-Burger"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src="./assets/images/burger.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
