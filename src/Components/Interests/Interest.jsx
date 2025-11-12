import React, { useState } from "react";
import useSecureInstance from "../../Hooks/SecureInstance";

const Interest = ({ interest }) => {
    const [accpetedInterst, setAcceptedInteres]=useState(interest)
    console.log(accpetedInterst)
     console.log(accpetedInterst)
    const Instance=useSecureInstance()
  const handleAccept=(cropId,interestId)=>{
    const afteraccept=interest
        // afteraccept[0].Status='Accepted'
        afteraccept.m
    Instance.put('/iterest-update',afteraccept[0]).then(data=>{
        console.log(data.data)
         setAcceptedInteres((prev) =>
        prev.map((singleInterest) =>
          singleInterest._id === interestId ? { ...singleInterest, Status: "accepted" } : singleInterest
        )
      );
    }).catch(err=>{
        console.log(err)    
    })
    
  }
  const handleReject=(CropId,interestId)=>{
    Instance.put('/reject-Update',{
        CropId,interestId
    }).then((data)=>{
        console.log(data)
        setAcceptedInteres((prev) =>
        prev.map((singleInterest) =>
          singleInterest._id === interestId ? { ...singleInterest, Status: "rejected" } : singleInterest
        )
      );
    }).catch(err=>console.log(err))
  }
//   console.log(accpetedInterst)
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold">Total {accpetedInterst.length} interst found</h1>
      {interest.length===0?<h1 className="text-4xl font-extrabold text-center my-10 text-gray-700">No Interest Yet</h1>: <div className="overflow-x-auto">
        <table className="table lg:ml-10">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Buyer Name</th>
              <th>Quantity</th>
              <th>Tptal Price</th>
              <th>Status</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {accpetedInterst.map((singleInterest, index) => {
              return (
                <tr key={singleInterest._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        {/* <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={`${singleInterest.image}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div> */}
                      </div>
                      <div>
                        <div className="font-bold">{singleInterest.userName} </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {singleInterest.quantity}
                    <br />
                  </td>
                  <td>
                    {singleInterest?.totalPrice?singleInterest.totalPrice:""}
                    <br />
                  </td>
                  <td>
                    {singleInterest.Status=="pending"?<h1 className="bg-amber-300 rounded-2xl w-fit px-2  pb-1 ">{singleInterest.Status}</h1>:singleInterest.Status=="accepted"?<h1 className="bg-green-500 rounded-2xl w-fit px-2  pb-1 ">{singleInterest.Status}</h1>:<h1 className="bg-red-500 rounded-2xl w-fit px-2  pb-1 ">{singleInterest.Status}</h1>}
                  </td>
                  <td>
                    {singleInterest.message}
                  </td>
                  <th>
                    {singleInterest.Status=="pending"? <div className="space-x-2 flex">
                                  <button onClick={()=>handleAccept(singleInterest.CropId,singleInterest._id)}  className="btn btn-outline text-green-500 btn-xs">
                                    
                                    Accept
                                  </button>
                                  <button onClick={()=>handleReject(singleInterest.CropId,singleInterest._id)}  className="btn btn-outline text-red-500 btn-xs">
                                   
                                   Reject
                                  </button>
                                </div>:<h1>Actions are availabe only for pending interests</h1>}
                   
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>}
     
    </div>
  );
};

export default Interest;
