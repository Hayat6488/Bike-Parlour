import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isBuyer = false;
    const isAdmin = true;
    const isSeller = false;

    return (
        <div className='mt-10 lg:mt-0 rounded-md'>
            <ul className="menu w-56 p-2">
                {isBuyer && <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/myorders'>My Orders</Link></li>}
                {
                    isAdmin &&
                    <>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li className='bg-white mb- rounded-3xl'><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                    </>
                }
                {
                    isSeller &&
                    <>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    </>
                }
            </ul>
        </div>
    );
};

export default SideBar;