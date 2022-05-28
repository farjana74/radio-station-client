import React from 'react';
import "./Footer.css";
import footerLogo from "../../../images/footer_logo (1).png"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='container-fluid footer-first '>

            <div className="container pt-5">
                <div className="row ">
                    <div className="col-md-4 border-end  ">
                        <img src={footerLogo} alt="" />

                        <div className='py-5'>
                            <p className=' text-white'>when unknown printer took gallery type and scrambled it to make type specimen bookas. when unknown printer took gallery type and scrambled it to make type specimen bookas. when unknown printer took gallery type and scrambled it to make type specimen bookas. when unknown printer took gallery type and scrambled it to make type specimen bookas.</p>
                        </div>
                        <div className='icons'>
                            <div className='footer-icon'>
                                <FaFacebookF />
                            </div>
                            <div className='footer-icon'>
                                <AiOutlineTwitter />
                            </div>
                            <div className='footer-icon'>
                                <FaLinkedinIn />
                            </div>

                            <div className='footer-icon'>
                                <ImYoutube />
                            </div>

                        </div>


                    </div>
                    <div className='col-md-8 footer-second-part'>
                        <div className='row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-md-1 g-2  g-lg-3'>
                            <div className="col-md-3">
                                <h1 className='text-white fs-5'>Subscribe to Get Notification</h1>
                            </div>
                            <div className='col-md-6'>
                                <div class="form-floating ">
                                    <input type="email" class="form-control form-input" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>

                            </div>
                            <div className='col-md-3'>
                                <button type="button" class="btn footer-btn text-white btn-lg">Get Started</button>


                            </div>

                        </div>
                        <hr className='text-white footer-hr' />
                        <div className='row pt-5'>
                            <div className="col-md-3">
                                <h2 className='text-white fs-4'>Explore More</h2>
                                <hr className='text-white w-50' />
                                <ul className='fs-6  text-white'>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Privacy Policy</li>
                                    <li>security</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='col-md-5'>
                                <h3 className='text-white fs-4'>We are Fmave</h3>
                                <hr className='text-white w-50' />
                                <p className='text-white'>Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion elit.</p>
                                <div class="form-floating ">
                                    <input type="email" class=" form-control form-input" id="floatingInput" placeholder="name@example.com" />
                                    <label className=' text-center' for="floatingInput">Google store</label>
                                </div>
                                <br />
                                <div class="form-floating ">
                                    <input type="email" class=" form-control form-input" id="floatingInput" placeholder="name@example.com" />
                                    <label className=' text-center' for="floatingInput">Apple store</label>
                                </div>

                            </div>
                            <div className='col-md-4'>
                                <h3 className='text-white fs-4'>Contact</h3>
                                <hr className='text-white w-75' />
                                <p className='text-white'>when unknown printer
                                    took gallery type
                                    and scrambled it
                                    to make type bookas.</p>
                                <p className='text-white '>123 Fifth Floor East 26th Street, New York, NY 10011</p>
                                <p className='text-white '>+12345-679-321</p>
                                <p className='text-white '>info@yourmail.com</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



        </div >
    );
};

export default Footer;