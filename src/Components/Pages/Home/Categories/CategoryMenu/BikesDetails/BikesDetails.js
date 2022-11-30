import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bikes from './Bike/Bikes';

const BikesDetails = () => {

    const bikes = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-12'>
            {
                // bikes?.map(bike => <Bikes key={bike._id} bike={bike}></Bikes>)
                bikes?.map((bike, i) => {
                    return (
                        <Bikes key={bike._id} index={i} bikes={bikes} bike={bike}></Bikes>
                    )
                })
            }
        </div>
    );
};

export default BikesDetails;