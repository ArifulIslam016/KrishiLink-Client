import React, { use, useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { Link, useNavigate } from "react-router";
import AuthContext from "../AuthContext/Authcontext";
import useSecureInstance from "../Hooks/SecureInstance";

const MyInterest = () => {
  const navigate = useNavigate();
  const [allcrops, setallCrops] = useState([]);
  //   const [crops, setcrops] = useState([]);
  const { user, loading } = use(AuthContext);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [sortmethod, SetsortMethod] = useState(null);
  const Instance = useSecureInstance();
  useEffect(() => {
    Instance.get("/allcrops").then((data) => {
      setFetchLoading(false);
      const userInterestedCropdata = data.data.filter((crops) =>
        crops.interest?.some((crop) => crop.userEmail === user.email)
      );
      if (!sortmethod) {
        setallCrops(userInterestedCropdata);
      }
      if (sortmethod === "sortbyquantity") {
        const sortbyquantity = userInterestedCropdata.sort(
          (a, b) => parseInt(a.quantity) - parseInt(b.quantity)
        );
        console.log(sortbyquantity);
        setallCrops(sortbyquantity);
      }
      if (sortmethod === "sortbydate") {
        const sortbydata = userInterestedCropdata.sort(
          (a, b) => a.createdAt - b.createdAt
        );
        setallCrops(sortbydata);
      }
      if (sortmethod === "sortbyprice") {
        const sortbyprice = userInterestedCropdata.sort(
          (a, b) => parseInt(a.pricePerunit) - parseInt(b.pricePerunit)
        );
        setallCrops(sortbyprice);
      }
    });
  }, [user, Instance, sortmethod]);
  if (loading || fetchLoading) {
    return <LoadingPage></LoadingPage>;
  }
  if (!user) {
    navigate("/login");
  }

  return (
    <div className="max-w-[1440px]  mx-auto py-12">
      <h1 className="text-2xl font-bold">
        Total {allcrops.length} interst found
      </h1>
      {allcrops.length === 0 ? (
        <h1 className="text-4xl font-extrabold text-center my-10 text-gray-700">
          You haven't any Interest Yet
        </h1>
      ) : (
        <div className="overflow-x-auto">
           <details className="dropdown rounded-xl mb-2 mg flex w-fit mx-auto bg-blue-200 ">
        <summary className="btn  bg-blue-200">Sort by</summary>
        <ul className="menu dropdown-content bg-transparent space-y-1 rounded-box z-1 w-52 p-2 shadow-sm">
          <li className="bg-blue-300 rounded-xl">
            <button onClick={() => SetsortMethod("sortbyquantity")}>
              Sort by crop quantity
            </button>
          </li>
          <li className="bg-blue-300 rounded-xl">
            <button onClick={() => SetsortMethod("sortbydate")}>
              Sort by Date
            </button>
          </li>
          <li className="bg-blue-300 rounded-xl">
            <button onClick={() => SetsortMethod("sortbyprice")}>
              Sort by Price
            </button>
          </li>
        </ul>
      </details>
          <table className="table lg:ml-10">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>seller name</th>
                <th>Crop name</th>
                <th>Availabe Quantity</th>
                <th>Price Per Unit</th>
                <th>Interest Quantity</th>
                <th>Status</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allcrops.map((crop, index) => {
                // console.log(crop)
                const myInterest = crop.interest?.find(
                  (interest) => interest.userEmail === user.email
                );

                // console.log(myInterest)
                return (
                  <tr key={crop._id}>
                    <th>{index + 1}</th>
                    <td>{crop.owner?.ownerName}</td>
                    <td>
                    <Link to={`/detailed-post/${myInterest.CropId}`}>  {crop.name}</Link>
                      <br />
                    </td>
                    <td>
                      {crop.quantity} {crop.unit}
                      <br />
                    </td>
                    <td>
                      {crop.pricePerUnit}
                      <br />
                    </td>
                    <td>{myInterest?.quantity}</td>
                    <td className="">
                      {myInterest.Status === "pending" ? (
                        <h1 className="bg-amber-300 rounded-2xl w-fit px-2  pb-1 ">
                          {myInterest.Status}
                        </h1>
                      ) : myInterest?.Status === "rejected" ? (
                        <h1 className="bg-red-500 rounded-2xl w-fit px-2  pb-1">
                          {myInterest.Status}
                        </h1>
                      ) : (
                        <h1 className="bg-green-500 rounded-2xl w-fit px-2  pb-1">
                          {myInterest?.Status}
                        </h1>
                      )}
                    </td>

                    <td>{myInterest.message}</td>

                    <th>
                      <div className="space-x-2 flex">
                        <Link
                          to={`/detailed-post/${myInterest.CropId}`}
                          className="btn text-green-500 btn-outline mt-auto text-center font-medium py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterest;
