import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "../CSS/index.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
       <body className="login-background">
       <section className="Login-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-9 mx-auto login-box">                        
                        <div className="row login-row">
                        
                            <div className="Login-leftside col-12 col-lg-5">
                                <figure>
                                    <img src="./Assets/yoga_login.png" alt="Image" className="img-fluid login-image"/>
                                </figure>
                            </div>

                            <div className="Login-rightside col-12 col-lg-7">
                                <h1 className="Login-main-heading fw-bold">Register</h1>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 Login-input-field">
                                            <input className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" type="email" name="" id="" required/>                                            
                                        </div>
                                        <div className="row">
                                        <div className="col-12 col-lg-6 Login-input-field">
                                            <input className="register__textBox"value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder="Password" required/>                                  </div>
                                    </div>
                                    </div>
                                    <button onClick={() => registerWithEmailAndPassword(email, password)} className="btn btn-style w-20">Login</button>
                                    <br></br>
                                    <br></br>
                                    <button className="login__btn login__google" onClick={signInWithGoogle}>Login with Google</button>
                                    <div className="login-footer">
                                        <span>Login </span> <Link to="/login"> login</Link> <br/>
                                        <span>Forgot </span> <Link to="/reset"> Username/password</Link> <br/>
                                    </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
       </body>
    </>
  )
}
export default Register;