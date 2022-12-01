import React, { useEffect, useReducer, useState } from 'react';
import Buyer from '../AllBuyers/Buyer';
import Seller from './Seller';

const AllSellers = () => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [seller, setSeller] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users/seller', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [ignored])

    return (
        <div className='flex justify-center w-full'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='text-xl'>Name</span></th>
                            <th><span className='text-xl'>Email</span></th>
                            <th><span className='text-xl'>Status</span></th>
                            <th><span className='text-xl'>Action</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller[0]?.map(seller => <Seller key={seller._id} seller={seller} forceUpdate={forceUpdate}></Seller>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><span className='text-xl'>Name</span></th>
                            <th><span className='text-xl'>Email</span></th>
                            <th><span className='text-xl'>Status</span></th>
                            <th><span className='text-xl'>Action</span></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};;

export default AllSellers;