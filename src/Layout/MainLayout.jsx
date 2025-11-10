import React from 'react';
import Navbar from '../Components/ToShared/Navbar';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
               <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;