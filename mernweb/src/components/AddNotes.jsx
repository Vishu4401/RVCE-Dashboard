import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddNotes = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    title: "",
    desc: "",
    upload: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Handle Submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object Destructuring
    // Store Object data into Variables
    const { title, desc, upload } = user;
    try {
      // It is submitted on port 3000 by default
      //It is in FrontEnd but it needs to be submitted to the BackEnd(3001), so we need Proxy
      const res = await fetch("/addnotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          upload,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Already used details");
      } else {
        // Server must be started for Proxy to work
        window.alert("Registered Successfully");
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center 
                        text-white justify-content-center form order-2"
          >
            <h1 className="display-4 fw-bolder">Hello!</h1>
            <p className="lead text-center">Enter your details to Add Notes</p>
          </div>

          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="title"
                  value={user.title}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Description
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="desc"
                  value={user.desc}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="examplePassword1" className="form-label">
                  upload
                </label>

                <input
                  type="file"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="upload"
                  value={user.upload}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Upload file
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
