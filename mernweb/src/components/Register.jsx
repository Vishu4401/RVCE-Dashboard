import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
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
    const { firstname, lastname, email, phone, password } = user;
    try {
      // It is submitted on port 3000 by default
      //It is in FrontEnd but it needs to be submitted to the BackEnd(3001), so we need Proxy
      const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          password,
        })
      })

      if (res.status === 400 && !res) {
        window.alert("Invalid data entered, kindly enter the correct details");
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
            <h1 className="display-4 fw-bolder">Hello habitué!</h1>
            <p className="lead text-center">⏎ Enter your details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login Here
            </NavLink>
          </div>

          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label for="name1" className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name1"
                  name="firstname"
                  required="true"
                  value={user.firstname}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label for="name2" className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name2"
                  name="lastname"
                  required="true"
                  value={user.lastname}
                  onChange={handleInput}
                />

              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  required="true"
                  value={user.email}
                  onChange={handleInput}
                  pattern="[^@]+\.[m][c][a][1][9]+@[r][v][c][e]+.[e][d][u]+\.[i][n]"
                />

              </div>

              <div className="mb-3">
                <label for="phone" className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhone1"
                  name="phone"
                  required="true"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label for="examplePassword1" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  required="true"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div> */}

              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
