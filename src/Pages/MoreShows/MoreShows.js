import React from 'react';
import AboutBrand from '../AboutUs/AboutBrand/AboutBrand';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Footers from '../Shared/Footers/Footers';
import Navigation from '../Shared/Navigation/Navigation';
import MoreShowDetails from './MoreShowDetails/MoreShowDetails';


const MoreShows = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <br />
            <br />
            <br />
            <MoreShowDetails></MoreShowDetails>
            <br />
            <br />
            <br />
            <br />
            <br />
            <AboutBrand></AboutBrand>
            <Footer></Footer>
            <Footers></Footers>
        </div>
    );
};

export default MoreShows;