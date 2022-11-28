import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideBar from '../Pages/Shared/Sidebar/SideBar';

const DashboardLayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col-reverse lg:flex-row mt-10 gap-2 px-10 min-h-[61vh]'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;