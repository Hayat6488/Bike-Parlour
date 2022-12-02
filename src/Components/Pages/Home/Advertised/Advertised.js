import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard/AdvertiseCard';

const Advertised = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://bike-parlour-server.vercel.app/advertised')
            .then(data => {
                setProducts(data.data);
            });
    }, [])

    return (
        <div>
            {
                products.length > 0
                &&
                <div className='mx-36 mt-16'>
                    <h1 className='text-3xl font-semibold mb-8'>Advertised Items</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-3'>
                        {
                            products.map(product => <AdvertiseCard key={product._id} bikes={products} bike={product}></AdvertiseCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertised;