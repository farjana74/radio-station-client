import React from 'react';
import "./AboutBrand.css";
import brand1 from "../../../images/brand_01.png"
import brand2 from "../../../images/brand_02.png"
import brand3 from "../../../images/brand_03.png"
import brand4 from "../../../images/brand_04.png"
import brand5 from "../../../images/brand_05.png"

const AboutBrand = () => {

    return (
        <div className='container-fluid  brand-bg p-5  '>
            <div class="row row-cols-2 row-cols-lg-5 gx-2 gy-2 g-lg-3 ">
                <div class="col">
                    <img src={brand1} alt="" />
                </div>
                <div class="col">
                    <img src={brand2} alt="" />
                </div>
                <div class="col">
                    <img src={brand3} alt="" />
                </div>
                <div class="col">
                    <img src={brand4} alt="" />
                </div>
                <div class="col">
                    <img src={brand5} alt="" />
                </div>


            </div>


        </div>
    );
};

export default AboutBrand;