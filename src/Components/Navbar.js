import React, { useState } from 'react';
import {Link} from "react-scroll";
import {Link as Links} from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [navbar, setNavbar] = useState(false);

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
            <div className ="container" style={{marginLeft: "5%", marginRight: "5%" }}>
                <Link className = "navbar-brand" to="header" spy={true} smooth={true} offset={-100} duration={10}>
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
                        <Link className = "nav-link active" aria-current="page" to="header" spy={true} smooth={true} offset={-100} duration={10}>Home</Link>
                        </li>

                        <li className = "nav-item">
                        <Link className = "nav-link" to="about" spy={true} smooth={true} offset={-150} duration={10}>About</Link>
                        </li>

                        <li className = "nav-item">
                        <Link className = "nav-link" to="services" spy={true} smooth={true} offset={-100} duration={10}>Services</Link>
                        </li>

                        <li className = "nav-item">
                        <Link className = "nav-link" to="contact" spy={true} smooth={true} offset={-95} duration={10}>Contact</Link>
                        </li>
                        <form className="d-flex">        
                            {/* <button className="btn btn-style" type="submit">SignUp</button> */}
                            <Links to="/login"><button className="btn btn-style btn-style-border" type="submit">Login</button></Links>
                        </form>
                    </ul>                
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Navbar;