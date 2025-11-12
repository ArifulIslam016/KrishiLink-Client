import React, { use, useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { Link, useNavigate } from "react-router";
import AuthContext from "../AuthContext/Authcontext";
import useSecureInstance from "../Hooks/SecureInstance";

const MyInterest = () => {
  const navigate = useNavigate();
  const [interests, setinterest] = useState([]);
  const [crops, setcrops] = useState([]);
  const { user, loading } = use(AuthContext);
   const [fetchLoading,setFetchLoading]=useState(true)
  const Instance = useSecureInstance();
  console.log(interests);
  useEffect(() => {
    Instance.get("allcrops").then((data) => {
        setFetchLoading(false)
      setinterest(
        data.data.filter((crops) =>
          crops.interest?.some((crop) => crop.userEmail === user.email)
        )
      );
      setcrops(data.data);
    });
  }, [user]);
  if (loading||fetchLoading) {
    return <LoadingPage></LoadingPage>;
  }
  if (!user) {
    navigate("/login");
  }

  return (
    <div className="max-w-[1440px] mx-auto py-12">
      <h1 className="text-2xl font-bold">
        Total {interests.length} interst found
      </h1>
      {interests.length === 0 ? (
        <h1 className="text-4xl font-extrabold text-center my-10 text-gray-700">
          You haven't any Interest Yet
        </h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="table lg:ml-10">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>seller name</th>
                <th>Crop name</th>
                <th>Interest Quantity</th>
                <th>Status</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {interests.map((singleInterest, index) => {
                return (
                  <tr key={singleInterest._id}>
                    <th>{index + 1}</th>
                    <td>{singleInterest.owner.ownerName}</td>
                    <td>
                      {singleInterest.name}
                      <br />
                    </td>
                    <td>{singleInterest.interest[0].quantity}</td>
                    <td className="">
                      {singleInterest.interest[0].Status === "pending" ? (
                        <h1 className="bg-amber-300 rounded-2xl w-fit px-2  pb-1 ">
                          {singleInterest.interest[0].Status}
                        </h1>
                      ) : (
                        <h1 className="bg-green-500 rounded-2xl w-fit px-2  pb-1">{singleInterest.interest[0].Status}</h1>
                      )}
                    </td>

                    <td>
                      {singleInterest.interest[0].length < 10
                        ? singleInterest.message.slice(0, 10)
                        : singleInterest.interest[0].message}
                    </td>
                    <th>
                      <div className="space-x-2 flex">
                        <Link
                          to={`/detailed-post/${singleInterest.interest[0].CropId}`}
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
