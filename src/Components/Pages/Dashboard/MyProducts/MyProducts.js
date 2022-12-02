import React, { useContext, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import Row from './Row/Row';
import { Helmet } from 'react-helmet';

const MyProducts = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const { user } = useContext(AuthContext);

    const { data: products } = useQuery({
        queryKey: ['myproducts', ignored, user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?uid=${user?.uid}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
                            products?.map(product => <Row key={product._id} product={product} forceUpdate={forceUpdate}></Row>)
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
                <title>BIKE PARLOUR: My Products</title>
            </Helmet>
        </div>
    );
};

export default MyProducts;