import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isBuyer = false;
    const isAdmin = false;
    const isSeller = true;

    return (
        <div className='mt-10 lg:mt-0 rounded-md'>
            <ul className="menu w-56 p-2">
                {isBuyer && <li className='bg-white mb-2 rounded-3xl'><Link>My Orders</Link></li>}
                {
                    isAdmin &&
                    <>
                        <li className='bg-white mb-2 rounded-3xl'><Link>All Buyers</Link></li>
                        <li className='bg-white mb-2 rounded-3xl'><Link>All Sellers</Link></li>
                        <li className='bg-white mb- rounded-3xl'><Link>Reported Items</Link></li>
                    </>
                }
                {
                    isSeller &&
                    <>
                        <li className='bg-white mb-2 rounded-3xl'><Link>Add a Product</Link></li>
                        <li className='bg-white mb-2 rounded-3xl'><Link>My Products</Link></li>
                    </>
                }
            </ul>
        </div>
    );
};

export default SideBar;