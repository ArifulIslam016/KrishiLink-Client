import React from 'react';
import Navbar from '../Components/ToShared/Navbar';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
               <Toaster></Toaster>
            <Navbar></Navbar>
        <main className='flex-grow'>
       <Outlet></Outlet>
        </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;