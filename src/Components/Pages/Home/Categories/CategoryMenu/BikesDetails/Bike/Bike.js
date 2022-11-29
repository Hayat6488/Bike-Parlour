import React from 'react';

const Bikes = ({ bike }) => {
    console.log(bike);

    const { buyPrice, condition, date, des, img, location, name, number, price, used, year, _id, sellerName } = bike;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{name}</h2>
                    <h1 className='text-lg font-semibold'>{sellerName}</h1>
                    <h1 className='text-lg font-semibold'>{location}</h1>
                    <h2 className="card-title">Condition:  {condition}</h2>
                    <div className='grid grid-cols-2'>
                        <h1 className='text-lg font-semibold'>Price: {price} Tk</h1>
                        <h1 className='text-lg font-semibold'>Original Price: {buyPrice}</h1>
                        <h1 className='text-lg font-semibold'>Used: {used} years</h1>
                        <h1 className='text-lg font-semibold'>{date}</h1>
                        <h1 className='text-lg font-semibold'>{bike?.verified}</h1>
                    </div>
                    <h1 className='text-lg font-semibold'>{des}</h1>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikes;