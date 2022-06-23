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
                    <h3 className="fs-5 text-center mb-0">Resources available</h3>
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


// import React from "react";
// import axios from 'axios';


// const Notes = ({files, setFiles, removeFiles}) => {
//   const uploadHandler = (event) => {
//     const file = event.target.files[0];
    
//     if(!file) return;
//     file.isUploading = true;
//     setFiles([...files, file])

//     //Upload File
//     const formData = new FormData();
//     formData.append(
//       "newFile", file, file.name
//     )

//     axios.post('http://localhost:3000/notes', formData)
//       .then((res) => {
//         file.isUploading = false;
//         setFiles([...files, file])
//       })
//       .catch((err) => {
//         console.error(err)
//         // removeFile(file.name)
//       });
//   }

//   return(
//     <>
//     <div className="col-md-9 center">
//       <div className="file-card">
//         <div className="file-inputs">
//           <input type="file" onChange = {uploadHandler} />
//           <button>
//             <i>
//               Upload
//             </i>
//           </button>
//         </div>

//         <p className="main">Supported Files</p>
//         <p className="info">PDF, JPG, PNG</p>

//       </div>
//     </div>
//     </>
//   )

// }

// export default Notes;