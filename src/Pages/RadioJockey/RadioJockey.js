import React from 'react';
import "./RadioJockey.css";
import jockey1 from "../../images/team1-1.jpg"
import jockey2 from "../../images/team2.jpg"
import jockey3 from "../../images/team3.jpg"
import jockey4 from "../../images/team4.jpg"
import jockey5 from "../../images/team6.jpg"
import jockey6 from "../../images/team7.jpg"
import jockey7 from "../../images/team2.jpg"
import jockey8 from "../../images/team6.jpg"

const RadioJockey = () => {
    return (
        <div className='container-fluid my-5'>

            <div class="container">
                <h2 className='text-center radio-jockey-title'>Our Radio Jockey   </h2>
                <div class=" pt-5 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2  g-lg-3 ">
                    <div class="col">
                        <img src={jockey1} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey2} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey3} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey4} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey5} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey6} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey7} alt="" />
                    </div>
                    <div class="col">
                        <img src={jockey8} alt="" />
                    </div>


                </div>
            </div>

        </div>
    );
};

export default RadioJockey;