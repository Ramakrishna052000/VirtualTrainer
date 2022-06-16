import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "../CSS/index.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
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
                                <h1 className="Login-main-heading fw-bold">Reset</h1>
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 Login-input-field">
                                            <input className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder="Email" required/>                                            
                                        </div>
                                    </div>
                                    <button onClick={() => sendPasswordReset(email)} className="login__btn">Send password reset email</button>
                                    <div className="login-footer">
                                        <span>Login </span> <Link to="/login"> login</Link> <br/>
                                        <span>No account? </span> <Link to="/register"> SignUp</Link>
                                    </div>
                                    
                                </form>
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
export default Reset;