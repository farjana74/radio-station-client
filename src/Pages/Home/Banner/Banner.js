import React from 'react';
import "./Banner.css";
// import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='container-fluid banner-bg'>
            <div className='banner-text '>
                <h1 className="p-5">There is Always
                    <br />
                    Something Great <br />
                    Idea Work....</h1>

                {/* <Typewriter
                    options={{
                        strings: 'hello world',
                        autoStart: true,
                        loop: true,
                    }}
                /> */}


            </div>


        </div>
    );
};

export default Banner;