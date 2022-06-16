import React from 'react'
import { useNavigate } from "react-router-dom";
const Contact = () => {
    function submitform(){
        alert ("Form has been submitted. We will get back to you soon!!");
    }
  return (
    <>
        <section className="contactus-section" id = "contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                    <h1 className="contact-main-heading text-center fw-bold">Contact Us</h1>
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <figure>
                                    <img src="./Assets/contact.jpg" alt="Contact Image" className="img-fluid"/>
                                </figure>
                            </div>
                            <div className="contact-rightside col-12 col-lg-7">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input className="form-control" type="text" name="" id="" placeholder="First Name" required/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input className="form-control" type="text" name="" id="" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input className="form-control" type="email" name="" id="" placeholder="Email" required/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-field">
                                            <input className="form-control" type="text" name="" id="" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 contact-input-field">
                                            <textarea className="form-control " type="text" name="" id="" placeholder="Enter your Message" row="3" required/>
                                        </div>
                                    </div>
                                    <div class="form-check form-checkbox-style ">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label class="form-check-label" className="main-hero-para">
                                           I agree that the Virtual Trainer may contact me at the email address or phone number above.
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-style w-100" onClick={submitform}> Submit </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact;