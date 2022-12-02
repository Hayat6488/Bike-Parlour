import React from 'react';
import './Carousel.css'
import img1 from '../../../Assets/Carousel/bike1.jpg'
import img2 from '../../../Assets/Carousel/bike2.jpg'
import img3 from '../../../Assets/Carousel/bike3.jpg'


const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full carousel-custom">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>Find your<br />  Dream Bike<br /> from BIKE PARLOUR</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>Sell your old<br /> bike easily,</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>Upgrade your old <br /> Bike from BIKE PARLOUR.</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;