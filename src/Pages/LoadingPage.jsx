import React from 'react';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <span className="loading loading-spinner loading-xl"></span>
            <p className='text-gray-600 text-2xl'>Loading</p>
        </div>
    );
};

export default LoadingPage;