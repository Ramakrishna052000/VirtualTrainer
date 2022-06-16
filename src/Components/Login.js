import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../CSS/index.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/main");
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
                                <h1 className="Login-main-heading fw-bold">Login</h1>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 Login-input-field">
                                            <input className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder="Email" required/>                                            
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-6 Login-input-field">
                                            <input className="register__textBox"value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder="Password" required/>
                                        </div>
                                    </div>
                                    
                                    <button onClick={() => logInWithEmailAndPassword(email, password)} className="btn btn-style w-20">Login</button>
                                    <br></br>
                                    <br></br>
                                    <button className="login__btn login__google" onClick={signInWithGoogle}>Login with Google</button>
                                    <div className="login-footer">
                                        <span>Forgot </span> <Link to="/reset"> Username/password</Link> <br/>
                                        <span>No account? </span> <Link to="/register"> SignUp</Link>
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
export default Login;


