import React from 'react';
import AboutBrand from '../AboutUs/AboutBrand/AboutBrand';
import Footer from '../Shared/Footer/Footer';
import Footers from '../Shared/Footers/Footers';
import Navigation from '../Shared/Navigation/Navigation';
import { MdOutlineLocalMovies } from 'react-icons/md';
import Banner from '../Home/Banner/Banner';
import "./ContactUs.css";
import { useForm } from 'react-hook-form';

const ContactUs = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    }
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <div className="container-fluid my-5">
                <div className='container'>
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5  cols contact-address p-5 shadow-lg rounded">
                            <div>
                                <h1 className="fs-2 text-white">Get In Touch</h1>
                                <p className='py-2 fs-5  text-white'>Lorem Ipsum hasbeen standard daand scrambled. Rimply dummy text of the printing and typesetting industry</p>
                                <div className='d-flex align-items-center  '>
                                    <div className='p-3  rounded-pill contact-location-icon'>
                                        <MdOutlineLocalMovies className='fs-1  ' />
                                    </div>
                                    <div className='ps-3'>
                                        <h3 className='text-white'>Location:</h3>
                                        <h6 className='text-white'>51 Street, Newyork City, NYPD</h6>
                                    </div>
                                </div>
                            </div>


                            <div className='d-flex align-items-center my-5  '>
                                <div className='p-3  rounded-pill contact-location-icon'>
                                    <MdOutlineLocalMovies className='fs-1  ' />
                                </div>
                                <div className='ps-3'>
                                    <h3 className='text-white'>Location:</h3>
                                    <h6 className='text-white'>51 Street, Newyork City, NYPD</h6>
                                </div>
                            </div>



                            <div className='d-flex align-items-center  '>
                                <div className='p-3  rounded-pill contact-location-icon'>
                                    <MdOutlineLocalMovies className='fs-1  ' />
                                </div>
                                <div className='ps-3'>
                                    <h3 className='text-white'>Location:</h3>
                                    <h6 className='text-white'>51 Street, Newyork City, NYPD</h6>
                                </div>
                            </div>




                        </div>

                        <div className='col-md-12 col-sm-12 col-lg-6 ms-2 border col shadow-lg p-3'>
                            <h3>Drop us a message</h3>
                            <p>We will get back to you as soon as possible.</p>
                            <div className='contact-us-form'>
                                <form className="row g-3" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="col-md-6 col">
                                        <div className="form-floating ">
                                            <input type="text" className="form-control" id="fullName" placeholder="fullName" required
                                                {...register("name")}
                                            />
                                            <label htmlFor="fullName">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div className="form-floating ">
                                            <input type="text" className="form-control" id="company_name" placeholder="company_name" required
                                                {...register("company_name")}
                                            />
                                            <label htmlFor="company_name">Company Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating ">
                                            <input type="text" className="form-control" id="workEmail" placeholder="workEmail" required
                                                {...register("email")}
                                            />
                                            <label htmlFor="workEmail">Work Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating ">
                                            <input type="text" className="form-control" id="phone" placeholder="subject" required
                                                {...register("phone")}
                                            />
                                            <label htmlFor="phone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 border">
                                        <div className="form-floating ">
                                            <textarea type="text" className="form-control border-0" id="message" placeholder="message" required
                                                {...register("message")}
                                                style={{ height: "120px" }}
                                            />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <button type="submit" className="send-btn"

                                        >Send</button>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>


                </div>
                <br />
                <br />
                <br />

                <div className='my-5'>
                    <div className='pb-3 px-lg-3'>

                        {/* <img src={map} alt="" className='img-fluid px-4 pb-3' /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.254643146431!2d90.4106905142981!3d23.809542392432846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78b0c47699b%3A0x1fbce4eb532a391c!2sTechsist%20Limited!5e0!3m2!1sen!2sbd!4v1648623156501!5m2!1sen!2sbd" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map-iframe' title='map'></iframe>
                    </div>
                </div>

            </div>
            <AboutBrand></AboutBrand>
            <Footer></Footer>
            <Footers></Footers>
        </>
    );
};

export default ContactUs;