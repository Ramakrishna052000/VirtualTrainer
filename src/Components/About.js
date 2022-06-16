import React from 'react'

const About = () => {
  return (
    <>
        <section className="main-about-container" id="about">
            <div className="container mb-5">
                <div className="row about-section">
                    {/* --------------main about left side---------------- */}
                    <div className="col-12 col-lg-5 text-center main-aboutsection-image">
                        <img className="img-fluid image-shadow" src="./Assets/about-yoga1.png" alt="image" />
                    </div>
                    
                    {/* --------------main about right side---------------- */}
                    <div className="col-11 col-lg-7 about-us-container">
                        <h1 className="about-main-heading">
                            About Virtual Trainer
                        </h1>
                        <div className="row">
                            <div className="col-11 col-lg-12 about-info">
                                <h3 className="main-about-h3">
                                    We are here to provide you a seamless and a dedicated trainer to you available in just a click. This will ensure that you no longer feel the absence of a trainer while you exercise at your place whenever you want to.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;