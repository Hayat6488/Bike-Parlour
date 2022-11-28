import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/photo_6055203949880914485_x-removebg-preview (2).png'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const isAdmin = true;

    const handleLogOut = () => {
        logOut()
            .then(result => {
            })
            .catch(error => console.error('error: ', error))
    }

    return (
        <div className="navbar bg-white px-10">
            <div className="navbar-start">
                <img src={logo} className="h-10" alt="" />
                <Link to='/'><h1 className='text-3xl font-semibold'>BIKE PARLOUR</h1></Link>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:block'>
                    <Link to='/' className='mr-4'><button className="btn btn-ghost">Home</button></Link>
                    {
                        user?.uid ?
                            <>
                                <Link to='/dashboard' className='mr-4'><button className="btn btn-ghost">DASHBOARD</button></Link>
                                <button onClick={handleLogOut} className="btn btn-ghost mr-4">LOG OUT</button>
                            </>
                            :
                            <Link to='/login' className='mr-6'><button className="btn btn-ghost">LOG IN</button></Link>
                    }
                </div>
                <div className="dropdown  dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='mr-6'>Home</Link></li>
                        <li><Link to='/login' className='mr-6'>login</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/myreviews' className='mr-4'>MY REVIEWS</Link></li>
                                    <li><Link to='/addservices' className='mr-4'>ADD SERVICES</Link></li>
                                    <li><button onClick={handleLogOut} className="btn btn-ghost mr-4">LOG OUT</button></li>
                                </>
                                :
                                <li><Link to='/login' className='mr-6'>LOG IN</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;