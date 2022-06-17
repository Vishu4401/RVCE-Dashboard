import React from "react";
// import ReactDOM from "react-dom";
class Notes extends React.Component {
  state = { selectedFiles: [] };

  Notes = (event) => {
    //***Convert file input result to an array, then store it in state.
    this.setState({ selectedFiles: Array.from(event.target.files) });
  };

  render() {
    return (
      <html lang="en">
        <head>
          <style></style>
        </head>
        <body>
          <center>
            <section id="notes">
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
              <form
                method="POST"
                action="/addnotesfile"
                enctype="multipart/form-data"
              >
                <input
                  type="file"
                  name="file"
                  required="true"
                  id="file-upload"
                  multiple
                  onChange={this.Notes}
                  className="btn btn-outline-primary rounded-pill px-4"
                />
                <br />
                <br />
                <div className="new-line">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                  />
                </div>

                {/****Show names of selected files and number of them.*/}
                <br />
                <p>
                  <b>{this.state.selectedFiles.length} file(s) selected</b>
                </p>
                {this.state.selectedFiles.map((file) => (
                  <p key={file.name}>{file.name}</p>
                ))}
              </form>
            </div>
          </center>
        </body>
      </html>
    );
  }
}

// ReactDOM.render(<Notes/>, document.body);

export default Notes;
