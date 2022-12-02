import React from 'react';
import img from '../../../Assets/photo_6055203949880914485_x.jpg'

const About = () => {
    return (
        <div className="mx-2 md:mx-6 lg:mx-36 my-16 shadow-md rounded-lg bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Bike Parlour</h1>
                    <p className="py-6">Bike Parlour is the largest online market place to buy and sell old bike or second hand bike. If you re thinking to upgrade your bike and thinking to sell and get a brand new bike then Bike parlour helps you to sell your old bike to a trusted client. And Here most of the seller's are verified. So it is safe to deal with them.</p>
                </div>
            </div>
        </div>
    );
};

export default About;