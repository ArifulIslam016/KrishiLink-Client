import React, { useEffect, useState } from "react";
import useSecureInstance from "../../Hooks/SecureInstance";
import CropCard from "../CropCard/CropCard";

const LatestProducts = () => {
  const Instance = useSecureInstance();
  const [lasetsCrops, SetLatestCrops] = useState([]);
  useEffect(() => {
    Instance.get("/lastest-Crops").then((data) => {
      SetLatestCrops(data.data);
    });
  });

  return (
    <div className="pt-10">
      <h1 className="pb-5 text-3xl font-bold text-center ">
        Latest{" "}
        <span className="bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] bg-clip-text text-transparent">
          {" "}
          Crops
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lasetsCrops.map((singleCrop) => (
          <CropCard key={singleCrop._id} crop={singleCrop}></CropCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
