import React, { use, useEffect, useState } from "react";
import useSecureInstance from "../Hooks/SecureInstance";
import { LuSearch } from "react-icons/lu";
import CropCard from "../Components/CropCard/CropCard";
import AuthContext from "../AuthContext/Authcontext";
import NotFount from "./404NotFount";
import LoadingPage from "./LoadingPage";

const AllCrops = () => {
  const { user } = use(AuthContext);
  const [allcrops, setCrops] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCrops, setFilteredCrops] = useState([]);
  const Instance = useSecureInstance();
  const [fetchLoading, setFetchLoading] = useState(true);
  const [type, setType] = useState("");
  const [sortby, setsorby] = useState("");
  const [order, setOrder] = useState("");
  useEffect(() => {
    Instance.get(`/allcrops?type=${type}&sortby=${sortby}&order=${order}`).then(
      (data) => {
        setCrops(data.data);
        setFetchLoading(false);
      }
    );
  }, [user, Instance, type, sortby, order]);
  if (fetchLoading) {
    return <LoadingPage></LoadingPage>;
  }
  const hanldeSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      setFilteredCrops([]);
      return;
    } else {
      const filteredData = allcrops.filter((singledata) =>
        singledata.name.toLowerCase().includes(value.toLocaleLowerCase())
      );
      setFilteredCrops(filteredData);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-gray-800 text-2xl">
          Total {allcrops.length} crops found
        </h1>
        {/* Search filter sort funcionlaity here */}
        <div className="relative flex flex-col justify-center items-center md:flex-row">
          {/* Search here */}
          <div>
            <input
              type="search"
              name="search"
              value={searchValue}
              onChange={hanldeSearch}
              className="input outline-2 outline-gray-900 focus:outline-3 w-fit focus:outline-green-600"
              placeholder="Search"
            />
            <LuSearch className="absolute top-3 left-40 text-gray-800" />
          </div>
          <div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Filter{" "}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <button onClick={() => setType("")}>All</button>
                </li>
                <li>
                  <button onClick={() => setType("Vegetable")}>
                    Vegetable
                  </button>
                </li>
                <li>
                  <button onClick={() => setType("Fruit")}>Fruit</button>
                </li>
                <li>
                  <button onClick={() => setType("Grain")}>Grains</button>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort{" "}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <button
                    onClick={() => {
                      setsorby("createdAt");
                      setOrder("asc");
                    }}
                  >
                    Date Frist to Last
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setsorby("createdAt");
                      setOrder("desc");
                    }}
                  >
                    Date Last to Frist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setsorby("quantity");
                      setOrder("asc");
                    }}
                  >
                    Quantity Small
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setsorby("quantity");
                      setOrder("desc");
                    }}
                  >
                    Quantity Large
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {
          searchValue.length !== 0 && filteredCrops.length === 0 ? (
            <div className="md:col-span-2 lg:col-span-3">
              <NotFount></NotFount>
            </div>
          ) : filteredCrops.length > 0 ? (
            filteredCrops.map((crop) => (
              <CropCard key={crop._id} crop={crop}></CropCard>
            ))
          ) : (
            allcrops.map((crop) => (
              <CropCard key={crop._id} crop={crop}></CropCard>
            ))
          )
          // allcrops.map(crop=><CropCard key={crop._id} crop={crop} ></CropCard>)
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
