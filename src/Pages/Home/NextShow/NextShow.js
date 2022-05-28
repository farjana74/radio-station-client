import React from 'react';
import showLogo from "../../../images/rj-anna.png";
import radioGif from "../../../images/radio.gif";
import "./NextShow.css";

const NextShow = () => {
    return (
        <div className='container my-5 border shadow-lg border-0'>
            <div className=' row row-cols-md-2 row-cols-lg-3  g-4 '>
                <div className="col-12 col-sm-12 col-md-4 col-lg-5 ">
                    <img className="hero-img" src={showLogo} alt="" />
                </div>
                <div className='col-md-5 col-12 col-sm-12  col-lg-5 py-sm-3 '>
                    <button className='mb-5 show-btn px-5 py-3 '>Next show </button>

                    <div className=' pt-3 align-items-center justify-content-center'>
                        <p>RJ Augsten</p>
                        <h3>Mid Night Show</h3>
                        <p className='text-muted'>Grursus mal suada faci lisis Lorem ipsum dolarorit more a</p>
                        <p className='text-muted'>ametion more consectetur elite.</p>
                    </div>


                </div>
                <div className='col-md-2 align-items-center d-flex '>
                    <div className='pt-5'>
                        <h3>Show time</h3>
                        <p>Monday</p>
                        <p className='show-time'>6:00 AM-7:30 AM</p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default NextShow;