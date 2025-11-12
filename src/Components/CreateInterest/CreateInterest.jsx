import React, { useEffect, useState } from "react";
import useSecureInstance from "../../Hooks/SecureInstance";
import Swal from "sweetalert2";
import LoadingPage from "../../Pages/LoadingPage";

const CreateInterest = ({CropQuantity, user, id,owner }) => {
  const Instance = useSecureInstance();
   const [fetchLoading,setFetchLoading]=useState(true)
  const[err,setErr]=useState('')
  const handleInterest = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const message = e.target.message.value;
    if(quantity<1){
        setErr("Quantity Should be atleast one")
        return
    }
    if(CropQuantity<quantity){
        setErr('Stock is less than your quantity')
        return
    }
    if(owner.ownerEmail===user.email){
        setErr("Owner Cant Show interest")
        return
    }
    const newInterest={
        userEmail:user.email,
        userName:user.displayName,
        quantity:quantity,
        message:message,
        Status:'pending'
    }
    Swal.fire({
  title: "Are you sure?",
  text: "Do you want to Submit?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yeah"
}).then((result) => {
    
    Instance.post(`/CreateInterest/${id}`,newInterest).then(()=>{
        setErr('')
        setFetchLoading(false)
        if (result.isConfirmed) {
       e.target.reset()
    Swal.fire({
      title: "Submit!",
      text: "Sucessfully Submitted.",
      icon: "success"
    })
  }
    }).catch(err=>{
        setErr(err.message)
    })
     setErr('')
     if(fetchLoading){
    return <LoadingPage></LoadingPage>
}
  
  }
)}

/***Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
}); */
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="py-5 text-3xl font-bold text-center ">
        Submit your{" "}
        <span className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">
          Interest
        </span>
      </h1>

      <form className="max-w-[600px] mx-auto pb-5 space-y-3" onSubmit={handleInterest}>
        <div>
          <label className=" text-gray-700 font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            placeholder="Quantity you need"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="3"
            required
            placeholder="Short description about your idea..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        {/* Submit here */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </div>
        <p className="text-xl text-red-500">{err}</p>
      </form>
    </div>
  );
};

export default CreateInterest;
