import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import Row from './Row/Row';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products, isLoading } = useQuery({
        queryKey: [user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?uid=${user?.uid}`);
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
                            products?.map(product => <Row key={product.id} product={product}></Row>)
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

export default MyProducts;