import React from 'react';
import "./NextEvent.css";
import waves from "../../images/wave.gif"
import event1 from "../../images/event1.jpg";
import event2 from "../../images/event2.jpg";
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NextEvent = () => {
    return (
        <div className='container-fluid my-5'>
            <div className='container'>
                <div className="row px-2 align-items-center">
                    <div className="col-md-9 d-flex">
                        <h1>Next Shows
                        </h1>
                        {/* <img className='waves-show-img' src={waves} alt="" /> */}
                        {/* <button className='show-btn px-5 py-2 '>All Show </button> */}

                    </div>
                    <div className="col-md-3">
                        <Link to="/moreShows"><button className='show-btn px-5 py-3 '>All Show </button></Link>
                    </div>
                </div>
                <div className='row pt-5 gy-5'>
                    <div className="col-md-6 ">
                        <div class="card">
                            <img src={event1} class="card-img-top" alt="..." />
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h1>Morning Classics</h1>
                                    <p class="card-text">RJ Angela Mayer</p>
                                </div>
                                <div>
                                    <button className='text-white border-0  px-2 py-1 event-btn'><BiTimeFive />12.00 AM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div class="card">
                            <img src={event2} class="card-img-top" alt="..." />
                            <div class="card-body d-flex align-items-center justify-content-between">
                                <div>
                                    <h1>Romantic Songs</h1>
                                    <p class="card-text">RJ Angela Mayer</p>
                                </div>
                                <div>
                                    <button className='text-white border-0  px-2 py-1 event-btn'><BiTimeFive />12.00 AM</button>
                                </div>
                                {/* <div>
                                    <button className='text-white border-0   event-btn'><BiTimeFive /> 9.00 AM</button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default NextEvent;