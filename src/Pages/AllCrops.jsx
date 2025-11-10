import React, { use, useEffect, useState } from 'react';
import useSecureInstance from '../Hooks/SecureInstance';
import { LuSearch } from 'react-icons/lu';
import CropCard from '../Components/CropCard/CropCard';
import AuthContext from '../AuthContext/Authcontext';

const AllCrops = () => {
    const {user}=use(AuthContext)
    const [allcrops,setCrops]=useState([])
    const Instance=useSecureInstance()
    useEffect(()=>{
        Instance.get('/allcrops').then(data=>setCrops(data.data))
    },[user,Instance])
   
    return (
        <div className='max-w-[1440px] mx-auto py-10'>
            <div className='flex justify-between'>
           <h1 className='text-gray-800 text-2xl'>Total {allcrops.length} crops found</h1>
           <div className='relative'>
            <input type="search" className='input outline-2 outline-gray-900 focus:outline-3 focus:outline-green-600' placeholder='Search' name="searchBox"/>
            <LuSearch className='absolute top-3 left-40 text-gray-800' />
           </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
        {
            allcrops.map(crop=><CropCard key={crop._id} crop={crop} ></CropCard>)
        }
            
        </div>
        </div>
    );
};

export default AllCrops;
/***   const newCrop = {
      name,
      type,
      pricePerUnit,
      unit,
      quantity,
      description,
      location,
      image,
      interest,
      owner,
    }; */