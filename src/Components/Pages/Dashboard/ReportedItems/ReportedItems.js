import React, { useEffect, useReducer, useState } from 'react';
import Product from './Product';

const ReportedItems = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/reported')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[ignored])

    return (
        <div className='flex justify-center w-full'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='ml-16 text-xl'>Name</span></th>
                            <th><span className='text-xl'>Price</span></th>
                            <th><span className='text-xl'>Action</span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(bike => <Product key={bike?._id} bike={bike} forceUpdate={forceUpdate}></Product>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th><span className='ml-16 text-xl'>Name</span></th>
                            <th><span className='text-xl'>Price</span></th>
                            <th><span className='text-xl'>Action</span></th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ReportedItems;