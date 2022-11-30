import React, { useContext, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import Row from '../MyProducts/Row/Row';
import Rows from './Rows/Rows';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: products, refetch,  isLoading } = useQuery({
        queryKey: ['myorders', user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorders/${user?.uid}`);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='flex justify-center w-full'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='ml-16 text-xl'>Name</span></th>
                            <th><span className='text-xl'>Price</span></th>
                            <th><span className='text-xl'>Status</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(bike => <Rows key={bike._id} bike={bike}></Rows>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th><span className='ml-16 text-xl'>Name</span></th>
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

export default MyOrders;