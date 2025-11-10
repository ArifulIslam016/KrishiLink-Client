import React from 'react';
import Navbar from '../Components/ToShared/Navbar';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
               <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;