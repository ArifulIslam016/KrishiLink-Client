import React from 'react';
import Navbar from '../Components/ToShared/Navbar';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;