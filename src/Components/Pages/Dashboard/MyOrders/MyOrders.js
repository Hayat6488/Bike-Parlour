import React, { useContext, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import Row from '../MyProducts/Row/Row';
import Rows from './Rows/Rows';
import { Helmet } from 'react-helmet';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: products, refetch,  isLoading } = useQuery({
        queryKey: ['myorders', user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorders/${user?.uid}`,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(products);


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

            <Helmet>
                <title>BIKE PARLOUR: My Orders</title>
            </Helmet>
        </div>
    );
};

export default MyOrders;