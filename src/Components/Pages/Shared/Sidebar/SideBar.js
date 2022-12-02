import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';

const SideBar = () => {

    const { user } = useContext(AuthContext);

    const isAdmin = useAdmin(user?.uid);
    const isBuyer = useBuyer(user?.uid);
    const isSeller = useSeller(user?.uid);

    return (
        <div className='mt-10 lg:mt-0 rounded-md'>
            <ul className="menu w-56 p-2">
                {isBuyer[0] && <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/myorders'>My Orders</Link></li>}
                {
                    isAdmin[0] &&
                    <>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li className='bg-white mb-2 rounded-3xl'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li className='bg-white mb- rounded-3xl'><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                    </>
                }
                {
                    isSeller[0] &&
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