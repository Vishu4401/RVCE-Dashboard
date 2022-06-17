import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6"><br/><br/>
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                <b>NoteStore</b> is a web application to help the students
                through faculty and has been since 2021. Our notes are crafted
                by the faculties of the organization.
              </p>
              <NavLink
                to="/dashboard"
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/contact"
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
