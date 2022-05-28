import React from 'react';
import EventTime from '../EventTime/EventTime';
import LatestBlog from '../LatestBlog/LatestBlog';
import NextEvent from '../NextEvent/NextEvent';
import RadioJockey from '../RadioJockey/RadioJockey';
import Footer from '../Shared/Footer/Footer';
import Footers from '../Shared/Footers/Footers';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import NextShow from './NextShow/NextShow';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Banner></Banner>
            <br />
            <br />
            <NextShow></NextShow>
            <br />
            <br />
            <br />
            <NextEvent></NextEvent>
            <br />
            <br />
            <br />
            <EventTime></EventTime>
            <br />
            <br />
            <br />
            <RadioJockey></RadioJockey>
            <br />
            <br />
            <br />
            <LatestBlog></LatestBlog>
            <br />
            <br />
            <br />
            <Footer></Footer>
            <Footers></Footers>
        </div>
    );
};

export default Home;