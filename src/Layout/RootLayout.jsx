import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1 bg-[#d9d9d9]'>
                {navigation.state ==="loading" ? <LoadingSpinner/> : <Outlet/>}
            </div>
            <Footer/>
            <ToastContainer/>
        </div> 
    );
};

export default RootLayout;