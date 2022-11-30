import React from 'react';
import Advertised from './Advertised/Advertised';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;