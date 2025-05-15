import type React from "react";
import { MapPin } from "lucide-react";
import wifi from "../../assets/images/wifi.svg"
import pool from "../../assets/images/pool.svg"
import parking from "../../assets/images/parking.svg"
import HomeButton from "./HomeButton";

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  priceType: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  img: string;
  amenities: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({

  title,
  price,
  priceType,
  location,
  bedrooms,
  bathrooms,
  img,
  amenities,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      <div className="h-48 bg-gray-300 relative">

        <img
          src={img || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold bg-[#64B870E5] px-3 py-1 rounded-md text-sm">
              $ {price} {priceType === "Rent" ? "/month" : ""}
            </span>
          </div>

        </div>
        <div className="absolute top-4 right-4">
          <div className="flex  gap-2 text-white font-semibold text-sm">
            <p className="bg-[#507DEF] px-2 py-1 rounded-md">{bedrooms} Bedrooms</p>
            <p className="bg-[#507DEF] px-2 py-1 rounded-md">{bathrooms} Bathrooms</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-4">
          <div className="flex items-center text-white mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>


      <div className="p-4 ">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-700 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#507DEF] text-sm bold">
            $ {price} {priceType === "Rent" ? "/month" : ""}
          </span>
        </div>

        <div className="border-t border-[#E2E2E2]">
          <div className="flex justify-between items-center">
              <div className=" flex flex-wrap gap-4 py-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-gray-700 text-sm " >
                <div className="mb-1">
                  {amenity === "wifi" && <img src={wifi} alt="wifi" className="w-5 h-5" />}
                  {amenity === "pool" && <img src={pool} alt="pool" className="w-5 h-5" />}
                  {amenity === "parking" && <img src={parking} alt="parking" className="w-5 h-5" />}
                  {/* Add more amenities here as needed */}
                </div>
                <span>{amenity}</span>
              </div>
            ))}

          </div>
          <div className="">
            <HomeButton> View Details</HomeButton>
          </div>

          </div>
        

        </div>


      </div>
    </div>
  );
};

export default PropertyCard;
