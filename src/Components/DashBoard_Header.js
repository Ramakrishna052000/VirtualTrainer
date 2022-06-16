import React from 'react'
import {Link} from "react-scroll";

const  DashBoard_Header = () => {
  return (
    <>
        <header>
            <section className="container main-hero-container" id = "dashboard_header">
                <div className="row" style={{marginLeft: "5%", marginRight: "5%"}}>
                     {/* --------------main header left side---------------- */}
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start p-5">
                        <h1 className="display-2">
                            Wellcome To Your
                        </h1>
                        <h1 className="display-2 personal"> Personal </h1>
                        <h1 className="display-2">
                            <span>Yoga</span> and <span>Exercise</span>
                        </h1>
                        <h3 className="main-hero-h3">
                            Do your Yoga and Exercise at home under the guidance of Virtual Trainer
                        </h3>
                        <form className="d-flex">        
                            <Link to="yoga" spy={true} smooth={true} offset={-150} duration={10}><button className="btn btn-style">Scroll &nbsp;&nbsp;<i class="fa fa-angle-double-down" aria-hidden="true"></i></button></Link>
                        </form>
                    </div>
                    {/* --------------main header right side---------------- */}
                    <div className="col-12 col-lg-7 header-right-side d-flex justify-content-cenetr align-items-center main-herosection-image">
                        <img className="img-fluid" src="./Assets/VT_Home.png" alt="image" />
                    </div>
                </div>
            </section>
        </header>
    </>
  )
}

export default  DashBoard_Header;