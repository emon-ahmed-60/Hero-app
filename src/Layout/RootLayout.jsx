import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import useCustomData from '../Hooks/useCustomData';
import LoadingSpinner from '../Components/LoadingSpinner';

const RootLayout = () => {
    const {loading} = useCustomData();
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1 bg-[#d9d9d9]'>
                {loading ? <LoadingSpinner/> : <Outlet/>}
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;