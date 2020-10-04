import React from "react";
import "./style.css";
import image_ppc from "../../content/images/ppc.png";
import image_quiz from "../../content/images/quiz.png";
import image_burger from "../../content/images/burger.png";
import image_weather from "../../content/images/weather.png";
import image_password from "../../content/images/password.png";
import image_parent_connect from "../../content/images/parent_connect.png";

function Portfolio() {
  return (
    <div id="top" className="card">
      <div className="card-body">
        <h1 className="font-weight-bold text-center">Portfolio</h1>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card project">
              <div className="card_title">
                <h3>Party Planner</h3>
                <div className="card_links">
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
              <img src={image_ppc} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Weather App</h3>
                <div className="card_links">
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
              <img src={image_weather} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Password Generator</h3>
                <div className="card_links">
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
              <img src={image_password} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card project">
              <div className="card_title">
                <h3>Parent Connect</h3>
                <div className="card_links">
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
              <img src={image_parent_connect} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Code Quiz</h3>
                <div className="card_links">
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
              <img src={image_quiz} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Eat-Da-Burger!</h3>
                <div className="card_links">
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
              <img src={image_burger} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
