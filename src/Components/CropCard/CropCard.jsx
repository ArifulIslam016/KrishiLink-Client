import React from 'react';

const CropCard = ({crop}) => {
    const {
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
    }=crop
    return (
     <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col">
  
    <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
      <img
        className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        src={image}
        alt={name}
      />
    </div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
    <p className="text-gray-600 mb-1"><span className="font-medium">Type:</span> {type}</p>
    <p className="text-gray-600 mb-1"><span className="font-medium">Price:</span> {pricePerUnit} / {unit}</p>
    <p className="text-gray-600 mb-1"><span className="font-medium">Quantity:</span> {quantity}</p>
    <p className="text-gray-600 mb-2"><span className="font-medium">Location:</span> {location}</p>
    <p className="text-gray-700 mb-3 text-sm line-clamp-2">Description:{description}</p>

    <p className="text-sm text-gray-500 mb-4">
      Posted by <span className="font-medium">{owner.ownerName}</span>
    </p>

    {/* View Details Button */}
    <button className="mt-auto bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition">
      View Details
    </button>
  </div>
    );
};

export default CropCard;