import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Footers from '../Shared/Footers/Footers';
import Navigation from '../Shared/Navigation/Navigation';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutBrand from './AboutBrand/AboutBrand';
import AboutDetails from './AboutDetails/AboutDetails';

const AboutUs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AboutBanner></AboutBanner>
            <br />
            <br />
            <br />
            <AboutDetails></AboutDetails>
            <br />
            <br />
            <br />
            <AboutBrand></AboutBrand>
            <Footer></Footer>
            <Footers></Footers>


        </div>
    );
};

export default AboutUs;