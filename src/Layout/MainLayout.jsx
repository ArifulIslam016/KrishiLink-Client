import React from 'react';
import Navbar from '../Components/ToShared/Navbar';
import Home from '../Pages/Home';
import { Outlet, useNavigation } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer/Footer';
import LoadingPage from '../Pages/LoadingPage';


const MainLayout = () => {
    const navigation=useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
               <Toaster></Toaster>
            <Navbar></Navbar>
        <main className='flex-grow'>
            { navigation.state==='loading'?<LoadingPage></LoadingPage>:      <Outlet></Outlet>}
 
        </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;