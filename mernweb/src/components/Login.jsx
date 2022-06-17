import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email : '',
        password : ''
    });

    // Handle Input
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({...user, [name]:value})
    }

    // Handle Login
    const handleSubmit = (event) => {
        event.preventDefault();
        const{email, password} = user;
        try{
            const res = fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify({
                    email, password
                })
            });

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert("Login Successful");
                window.location.reload();
                history.push('/');
            // Token gets generated in MongoDB when logged in
            // Now we need to create Schema for messages
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                        text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back!</h1>
                        <p className="lead text-center">Enter your Credentials to Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className = "btn btn-outline-light rounded-pill pb-2 w-50">
                            Register
                        </NavLink>
                    </div>

                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                
                                <label 
                                for = "exampleInputEmail1" 
                                className="form-label">
                                    Email Address
                                </label>

                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                pattern="[^@]+\.[m][c][a][1][9]+@[r][v][c][e]+.[e][d][u]+\.[i][n]"
                                />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label for = "examplePassword1" className="form-label">
                                    Password
                                </label>

                                <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                />                               
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for = "exampleCheck1">
                                        Remember me
                                    </label>
                    

                            </div>

                        <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                            Login
                        </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;