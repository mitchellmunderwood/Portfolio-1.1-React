import React from "react";
import "./style.css";
import image from "../../content/images/Mitchell_new.jpg";

function Home() {
  return (
    <div id="top" className="card">
      <h2 className="font-weight-bold text-center">Hey, I'm Mitchell</h2>
      <div id="inner_card" className="card">
        <div>
          <div className="about">
            <img className="about_img" src={image} alt="" />
          </div>
          <p>
            So, here's a little about me. I'm currently training to become a
            top-knotch software developer. Before this, I was getting a Physics
            degree from UNC Chapel Hill, and then a Master's in Accounting from
            Kenan Flagler Business School.
          </p>
          <p>
            You may be assuming I'm a bit nerdy at this point, and you'd be
            right. I'm super into science and technology. And I'm also pretty
            well versed in the MCU, Star Wars, and some Japanese Animes. I also
            love to go on runs, make things out of wood, and watch comedy.
          </p>
          <p>
            I'm a big stickler for quality, design, and crafting the user
            experience. I'm also a big proponent for keeping things simple and
            making sure everything is as easy to follow and understand as
            possible. I'm trying to be a better communicator all the time and
            keep being okay with looking stupid when I need too.
          </p>
        </div>
      </div>
      <div className="badges">
        <a
          href="https://www.github.com/sassypigeon"
          className="fa fa-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/mitchell-underwood-295455122/"
          targer="_blank"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://www.linkedin.com/in/mitchell-underwood-295455122/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB5SiFEBZ-gpkNv1miIqwVWwrQn4S9EG2Sg,1599617047615)/"
          target="_blank"
          className="fa fa-file-text"
        ></a>
      </div>
    </div>
  );
}

export default Home;
