import React, { useEffect, useReducer, useState } from 'react';
import Buyer from './Buyer';

const AllBuyers = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
       fetch('http://localhost:5000/users/buyer')
       .then(res => res.json())
       .then(data => setBuyers(data))
    },[ignored]) 

    return (
        <div className='flex justify-center w-full'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='text-xl'>Name</span></th>
                            <th><span className='text-xl'>Price</span></th>
                            <th><span className='text-xl'>Status</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers[0]?.map(buyer => <Buyer key={buyer._id} buyer={buyer} forceUpdate={forceUpdate}></Buyer>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th><span className='text-xl'>Name</span></th>
                            <th><span className='text-xl'>Price</span></th>
                            <th><span className='text-xl'>Status</span></th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllBuyers;