import React from "react";

const Interest = ({ interest }) => {
  const { userEmail, userName, quantity, message, Status } = interest;
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1>Total {Interest.length} interst found</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Buyer Name</th>
              <th>Quantity</th>
              <th>Status</th>
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
                    {singleInterest.Status}
                  </td>
                  <th>
                    <div className="space-x-2 flex">
                                  <button  className="btn btn-outline text-green-500 btn-xs">
                                    
                                    Accept
                                  </button>
                                  <button  className="btn btn-outline text-red-500 btn-xs">
                                   
                                   Reject
                                  </button>
                                </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Interest;
