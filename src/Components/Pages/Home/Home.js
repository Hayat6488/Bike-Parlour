import React from 'react';
import Advertised from './Advertised/Advertised';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Advertised></Advertised>

            <Helmet>
                <title>BIKE PARLOUR: HOME</title>
            </Helmet>
        </div>
    );
};

export default Home;