import React from 'react';
import Slider from '../Components/Slider/Slider';
import LatestProducts from '../Components/LatestProducts/LatestProducts';
import HowItworks from '../Components/HowItworks/HowItworks';
import News from '../Components/News/News';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Slider></Slider>
            <LatestProducts></LatestProducts>
            <HowItworks></HowItworks>
            <News></News>
        </div>
    );
};

export default Home;