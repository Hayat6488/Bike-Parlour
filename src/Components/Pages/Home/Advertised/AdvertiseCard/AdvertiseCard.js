import React from 'react';

const AdvertiseCard = ({product}) => {

    const { buyPrice, condition, date, des, img, location, name, number, price, used, year, _id, sellerName } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" className="rounded-xl h-72 w-full" />
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
                        <h1 className='text-lg font-semibold'>{product?.verified}</h1>
                    </div>
                    <h1 className='text-lg font-semibold'>{des}</h1>
                    <div className="card-actions">
                        <label htmlFor="bookNow" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdvertiseCard;