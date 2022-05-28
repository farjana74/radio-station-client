import React from 'react';
import "./AboutDetails.css";
import aboutDetails from "../../../images/about1-optimized.jpg"
import team1 from "../../../images/team1-1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";
import team4 from "../../../images/team4.jpg";


const AboutDetails = () => {
    return (
        <div className='container-fluid my-5'>
            <div className='container'>
                <div className=" row row-cols-md-1 row-cols-lg-2">
                    <div className="col">
                        <span className='about-title'>Who We are</span>
                        <h1 className='py-2 about-title-first '>Outside the box</h1>
                        <p className='text-muted fst-italic fs-5'>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                        <p className='text-muted fst-italic fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. </p>

                        <h5 className='my-5 p-3 fst-italic rounded fs-5 border shadow-lg'>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that.</h5>
                        <p className='text-muted fst-italic fs-5'>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that.</p>
                    </div>
                    <div className='col px-sm-2 py-md-2'>
                        <img src={aboutDetails} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />

            <div className='container my-5'>
                <h1 className='text-center team-lead
            '>Our Team</h1>
                <p className='text-center team-lead-details'>Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at
                    <br />
                    bulum nec odio aea the dumm ipsumm ipsum.</p>
                <div className=" row row-cols-1  row-cols-md-2 row-cols-lg-4  gy-3 row-cols-sm-1 py-5">
                    <div class=" col">
                        <img src={team1} class="card-img-top team-picture" alt="..." />
                        <div class="card-body border shadow-lg">
                            <h3 class="card-text text-center fs-4">RJ Zayeed Anwar</h3>
                            <p className='text-center'>Breakfast Show</p>
                            <h6 className='show-time text-center'>Sat, Mon 12:05</h6>
                        </div>
                    </div>
                    <div class=" col">
                        <img src={team2} class="card-img-top team-picture" alt="..." />
                        <div class="card-body border shadow-lg">
                            <h3 class="card-text text-center fs-4">RJ Zayeed Anwar</h3>
                            <p className='text-center'>Breakfast Show</p>
                            <h6 className='show-time text-center'>Sat, Mon 12:05</h6>
                        </div>
                    </div>
                    <div class=" col">
                        <img src={team3} class="card-img-top team-picture" alt="..." />
                        <div class="card-body border shadow-lg">
                            <h3 class="card-text text-center fs-4">RJ Zayeed Anwar</h3>
                            <p className='text-center'>Breakfast Show</p>
                            <h6 className='show-time text-center'>Sat, Mon 12:05</h6>
                        </div>
                    </div>
                    <div class=" col">
                        <img src={team4} class="card-img-top team-picture" alt="..." />
                        <div class="card-body border shadow-lg">
                            <h3 class="card-text text-center fs-4">RJ Zayeed Anwar</h3>
                            <p className='text-center'>Breakfast Show</p>
                            <h6 className='show-time text-center'>Sat, Mon 12:05</h6>
                        </div>
                    </div>
                </div>

            </div>
            <br />





        </div>
    );
};

export default AboutDetails;