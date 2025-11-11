import React from "react";

const Interest = ({ interest }) => {
  const handleAccept=(cropId)=>{

  }
  const handleReject=(cropId,interestId)=>{

  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold">Total {interest.length} interst found</h1>
      {interest.length===0?<h1 className="text-4xl font-extrabold text-center my-10 text-gray-700">No Interest Yet</h1>: <div className="overflow-x-auto">
        <table className="table lg:ml-10">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Buyer Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {interest.map((singleInterest, index) => {
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
                    {singleInterest.Status=="pending"?<h1 className="bg-amber-300 rounded-2xl w-fit px-2  pb-1 ">{singleInterest.Status}</h1>:<h1></h1>}
                  </td>
                  <td>
                    {singleInterest.message.length<10?singleInterest.message.slice(0,10):singleInterest.message}
                  </td>
                  <th>
                    <div className="space-x-2 flex">
                                  <button onClick={()=>handleAccept(singleInterest.CropId)}  className="btn btn-outline text-green-500 btn-xs">
                                    
                                    Accept
                                  </button>
                                  <button onClick={()=>handleReject(singleInterest.CropId,singleInterest._id)}  className="btn btn-outline text-red-500 btn-xs">
                                   
                                   Reject
                                  </button>
                                </div>
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
