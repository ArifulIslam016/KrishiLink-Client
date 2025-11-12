import React, { use, useRef, useState } from 'react';
import AuthContext from '../AuthContext/Authcontext';
import LoadingPage from './LoadingPage';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router';

const MyProfile = () => {
    const{user,loading,updateUserProfile}=use(AuthContext)
    const ref=useRef()
    const navigate=useNavigate()
    const [err,setErr]=useState('')
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    const handleUpdateButton=()=>{
        ref.current.showModal()
    }
    const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const updatedProfile = {
      displayName: name,
      photoURL: photoUrl,
    };
    console.log(updatedProfile)
    updateUserProfile(updatedProfile).then(()=>{
        toast("ProfileUpdated Updated")
         ref.current.close()
        navigate('/')
    }).catch(eror=>{
        setErr(eror.message)
        return
    });
    }
    return (
    <div className="flex flex-col items-center  bg-gray-100 py-10">
  <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-11/12 max-w-md flex flex-col items-center">
    <div className="relative">
      <img className="w-40 h-40 rounded-full border-3" src={user.photoURL} />
    </div>
    <h1 className="text-3xl md:text-4xl font-bold mt-4">{user.displayName}</h1>
    <p className="text-gray-500 mt-1">{user.email}</p>
    <button onClick={handleUpdateButton} className='btn btn-active mt-3 text-gray-700'>update Profile</button>
  </div>
  <dialog ref={ref}  className="modal">
        <div className="modal-box">
         <form onSubmit={handleUpdateProfile} className="space-y-5">
        <div>
          <label className=" text-gray-700 font-medium mb-1">Name</label>
          <input
          defaultValue={user.displayName}
            name="name"
            placeholder="Photo URL"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <label className=" text-gray-700 font-medium mb-1">Photo Url</label>
          <input
          defaultValue={user.photoURL}
            name="photoUrl"
            placeholder="Photo URL"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        {/* Submit here */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Update Profile
          </button>
        </div>
      </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline">Close</button>
            </form>
            {err}
          </div>
        </div>
      </dialog>
</div>
    );
};

export default MyProfile;