import React from 'react'

const Services = () => {
  return (
    <>
        <section className="service-main-container" id = "services">
            <div className="container service-container">
                <h1 className="service-main-heading text-center fw-bold">
                    Our Services
                </h1>
                <div className="row">
                    <div className="col-12 col-lg-4 col-xxl-4 text-center service-container-subdiv">
                        <img className="img-fluid service-image" src="./Assets/online-yoga.jpg" alt="image" />
                        <div className="service-info">
                            <h2 className="sub-heading"> Yoga </h2>
                            <p className="main-service-para text-center">
                                anjoaojv oajvjorg aopijgjva fisuvhvoiasv9s vhboisahfguiy
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xxl-4 text-center service-container-subdiv">
                        <img className="img-fluid service-image" src="./Assets/Online-Exercise.jpg" alt="image" />
                        <div className="service-info">
                            <h2 className="sub-heading"> Exercise </h2>
                            <p className="main-service-para text-center">
                                anjoaojv oajvjorg aopijgjva fisuvhvoiasv9s vhboisahfguiy
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xxl-4 text-center service-container-subdiv">
                        <img className="img-fluid service-image" src="./Assets/health-tips.jpg" alt="image" /> 
                        <div className="service-info">
                            <h2 className="sub-heading"> Health Tips </h2>
                            <p className="main-service-para text-center">
                                anjoaojv oajvjorg aopijgjva fisuvhvoiasv9s vhboisahfguiy
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Services;