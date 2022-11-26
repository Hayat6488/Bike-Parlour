import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BikesDetails = () => {

    const bikes = useLoaderData();

    console.log(bikes);

    return (
        <div>
            
        </div>
    );
};

export default BikesDetails;