import type React from "react";
import { Wifi, MapPin } from "lucide-react";

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
  id,
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
      <img
        src={img || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-700 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-bold">
            ${price} {priceType === "Rent" ? "/month" : ""}
          </span>
        </div>
        <div className="flex space-x-2">
          <span>{bedrooms} Bedrooms</span>
          <span>{bathrooms} Bathrooms</span>
        </div>
        <div className="flex space-x-2 mt-2">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center text-gray-700">
              {amenity === "wifi" && <Wifi className="w-4 h-4 mr-1" />}
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
