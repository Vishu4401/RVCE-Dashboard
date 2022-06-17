import React from "react";
// import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <html lang="en">
      <head>
        <style></style>
      </head>

      <body>
        <center>
          <section id="dashboard">
            <div className="container my-5 py-5">
              <div className="row mb-5">
                <div className="col-12">
                  <h3 className="fs-5 text-center mb-0">Notes Section</h3>
                  <hr className="w-25 mx-auto" />
                </div>
              </div>

              <img
                align="middle"
                src="/assets/library.jpeg"
                alt="contact"
                height="60%"
                width="60%"
              />
              {/* <div className="row">
                <div className="col-md-6"></div>
              </div>
            </div> */}
            </div>
          </section>

          <div>
            <div class="container-fluid mb-5">
              <div class="row">
                <nav
                  id="sidebarMenu"
                  class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                ></nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand"></div>

                    <div class="chartjs-size-monitor-shrink">
                      <div class=""></div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <form
            method="POST"
            action="/addnotesfile"
            enctype="multipart/form-data"
          >
            
            <div className="new-line">
              <input
                type="file"
                name="file"
                id="file-upload"
                required="true"
                className="btn btn-outline-primary rounded-pill px-4"
              />
            </div>
            <br></br>
            <div className="new-line">
              <input
                type="submit"
                value="submit"
                className="btn btn-outline-primary rounded-pill px-4"
              />

             </div>

            <br></br>
            <br></br>
          </form>
        </center>
      </body>
    </html>
  );
};

export default Dashboard;
