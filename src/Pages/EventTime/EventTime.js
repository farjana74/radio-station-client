import React from 'react';
import "./EventTime.css"

const EventTime = () => {
    return (
        <div className='conatiner-fluid  event-time-bg py-5'>
            <div className='container  text-center '>
                <div className='align-items-center justify-content-center d-flex event-height '>
                    <div>
                        <h1 className='text-center text-white'>Hurry Up! Next Event
                        </h1>
                        <p className='text-center text-white'>Worldwide Speakers Talks: Mind-blowing Talks <br />
                            from Leading IT Minds works</p>

                        <button type="button" class="btn text-white  btn-lg  event-time-btn">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTime;
