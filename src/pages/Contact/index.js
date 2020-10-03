import React from "react";
import "./style.css";

function About() {
  return (
    <div id="top" className="card">
      <div className="card-body">
        <h2 className="font-weight-bold text-center">Contact Me</h2>
        <h6 className="font-weight-bold text-center">
          Email: mitchellmunderwood@gmail.com
        </h6>
        <h6 className="font-weight-bold text-center">Mobile: (919) 757-7864</h6>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <input type="text" className="form-control" />
              <label>Your Name</label>
            </div>
            <div className="row">
              <input type="text" className="form-control" />
              <label>Your Email</label>
            </div>
            <div className="row">
              <textarea rows="2" className="form-control"></textarea>
              <label>Your Message</label>
            </div>
            <div className="text-right">
              <button type="button" className="btn btn-secondary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
