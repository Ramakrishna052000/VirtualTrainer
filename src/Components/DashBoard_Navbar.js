import React, { useEffect, useState  } from 'react';
import {Link} from "react-scroll";
import {Link as Links} from "react-router-dom";
import {logout,auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const DashBoard_Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
      }, [user, loading]);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    
  return (
    <>
    <section className = "navbar-bg">
        <nav className = { navbar ? "navbar active navbar-expand-lg navbar-light fixed-top" : "navbar navbar-expand-lg navbar-light fixed-top" } >
            <div className ="container" style={{marginLeft: "5%", marginRight: "8%" }}>
                <Link className = "navbar-brand" to="dashboard_header" spy={true} smooth={true} offset={-100} duration={10}>
                    <img className='d-inline-block align-top' src="./Assets/VT_logo.png" width="50" height="50" /> &nbsp;
                    Virtual Trainer
                </Link>

                <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setShow(!show)}>
                <span className = "navbar-toggler-icon"></span>
                </button>

                <div className = {`collapse navbar-collapse ${show ? "show" : "" }`}>
                    <ul className = "navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className = "nav-item">
                            <Link className = "nav-link active" aria-current="page" to="dashboard_header" spy={true} smooth={true} offset={-100} duration={10}>Home</Link>
                        </li>

                        <li className = "nav-item">
                            <Link className = "nav-link" to="yoga" spy={true} smooth={true} offset={-200} duration={10}>Yoga</Link>
                        </li>

                        <li className = "nav-item">
                            <Link className = "nav-link" to="exercise" spy={true} smooth={true} offset={-200} duration={10}>Exercise</Link>
                        </li>

                        <li className = "nav-item">
                            <Link className = "nav-link" to="health_tips" spy={true} smooth={true} offset={-250} duration={10}>Health Tips</Link>
                        </li>
                        <form className="d-flex">        
                            <button className="btn btn-style" onClick={logout}>Logout</button>
                        </form>
                    </ul>                
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default  DashBoard_Navbar;