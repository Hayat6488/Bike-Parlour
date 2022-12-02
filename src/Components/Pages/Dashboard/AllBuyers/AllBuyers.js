import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Buyer from './Buyer';

const AllBuyers = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [buyers, setBuyers] = useState([]);

    const { user } = useContext(AuthContext);
    //  Loading user data from mongoDb

    useEffect(() => {
        fetch('https://bike-parlour-server.vercel.app/users/buyer', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [ignored])





    return (
        <div className='flex justify-center w-full'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='text-xl'>Name</span></th>
                            <th><span className='text-xl'>Email</span></th>
                            <th><span className='text-xl'>Action</span></th>
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
                            <th><span className='text-xl'>Email</span></th>
                            <th><span className='text-xl'>Status</span></th>
                        </tr>
                    </tfoot>

                </table>
            </div>

            <Helmet>
                <title>BIKE PARLOUR: All Buyers</title>
            </Helmet>

        </div>
    );
};

export default AllBuyers;