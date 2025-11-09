import React, { useState } from 'react';
import useSecureInstance from '../../Hooks/SecureInstance';

const News = () => {
    const Instance=useSecureInstance()
    const [newsData,setNewsData]=useState([])
    Instance.get('/news').then(data=>setNewsData(data.data))
    console.log(newsData)
    return (
        <div>
            {newsData.length}
        </div>
    );
};

export default News;