import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AuthContext from '../AuthContext/Authcontext';
import useSecureInstance from '../Hooks/SecureInstance';
import LoadingPage from './LoadingPage';
import CreateInterest from '../Components/CreateInterest/createInterest';
import Interest from '../Components/Interests/Interest';

const CropDetails = () => {
    const {user,loading}=use(AuthContext)
    const [CropInfo, setCropInfo]=useState(null)
    const Instance=useSecureInstance()
    const id=useParams().id
 const [fetchLoading,setFetchLoading]=useState(true)
    useEffect(()=>{
       Instance.get(`/single-Crop/${id}`).then(data=>{
        setCropInfo(data.data)
        setFetchLoading(false)
        })
    },[Instance,id])
        if(!CropInfo||fetchLoading){
    return <LoadingPage></LoadingPage>
}
    const {
        _id,
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
    }=CropInfo
    return (
    <div className='max-w-[1440px] mx-auto'>
            <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
      <div className="w-full h-80 overflow-hidden rounded-xl mb-6">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full h-full object-cover transform hover:scale-107 transition duration-300"
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 mb-1"><span className="font-semibold">Type:</span> {type}</p>
      <p className="text-gray-600 mb-1"><span className="font-semibold">Price:</span> {pricePerUnit} / {unit}</p>
      <p className="text-gray-600 mb-1"><span className="font-semibold">Available Quantity:</span> {quantity}</p>
      <p className="text-gray-600 mb-3"><span className="font-semibold">Location:</span> {location}</p>

      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold mb-1 text-gray-700">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

     
      <div className="border-t pt-4 text-sm text-gray-600">
        <p>
          Posted by <span className="font-medium text-gray-800">{owner?.ownerName}</span>
        </p>
      </div>
    </div>
    <div className=' mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10'>
        {
        owner?.ownerEmail===user.email?<Interest interest={interest} ></Interest>: <CreateInterest CropQuantity={quantity} pricePerUnit={pricePerUnit} owner={owner} id={CropInfo._id} user={user} ></CreateInterest>
    }
   
    </div>
    </div>
    );
};

export default CropDetails;