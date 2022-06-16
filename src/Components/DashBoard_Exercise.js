import React from 'react';
import {Link as Links} from "react-router-dom";


const DashBoard_Exercise = () => {
  return (
    <>
        <section className="main-yoga-container" id="exercise">
            <div className="container mb-5">
                <div className="row yoga-section">

                    {/* --------------main yoga left side---------------- */}
                    
                    <div className="col-11 col-lg-7 yoga-container">
                        <h1 className="yoga-main-heading">
                            Exercise
                        </h1>
                        <div className="row">
                            <div className="col-11 col-lg-10 yoga-info">
                                <h3 className="main-yoga-h3">
                                    We are here to provide you a seamless and a dedicated trainer to you available in just a click. This will ensure that you no longer feel the absence of a trainer while you exercise at your place whenever you want to.
                                </h3>   <br/><br/>
                            </div>
                            <br/><br/>
                            <form className="d-flex">        
                                <Links to="/exerciselist"><button className="btn btn-style" type="submit">Practice</button></Links>
                            </form>
                        </div>
                    </div>
                    
                    {/* --------------main yoga right side---------------- */}
                    
                    <div className="col-12 col-lg-5 text-center main-yogasection-image">
                        <img className="img-fluid image-shadow" src="./Assets/Exercise.png" alt="image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DashBoard_Exercise;