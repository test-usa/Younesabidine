import React from "react";

const Featured = () => {
  return (
    <div>
      {" "}
      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                {/* Property img */}
                <div className="relative h-64 w-full">
                  <img
                    src={property.img || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${property.price} {property.priceType}
                </div>

                {/* Bedrooms & Bathrooms */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {property.bedrooms} Bedrooms
                  </span>
                  <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {property.bathrooms} Bathrooms
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {property.location}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-amber-500 font-bold mb-4">
                  ${property.price} {property.priceType}
                </p>

                {/* Amenities */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-6">
                    <div className="flex flex-col items-center">
                      <Wifi className="h-5 w-5 text-gray-500" />
                      <span className="text-xs text-gray-500 mt-1">WiFi</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 22H22"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.95 22L3 9.97C3 9.36 3.29 8.78 3.77 8.4L10.77 2.95C11.49 2.39 12.5 2.39 13.23 2.95L20.23 8.39C20.72 8.77 21 9.34 21 9.97V22"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 16.25V17.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs text-gray-500 mt-1">Pool</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.51 18.0098H4.5C3.12 18.0098 2 16.8898 2 15.5098V11.5098C2 10.1298 3.12 9.00977 4.5 9.00977H19.51C20.89 9.00977 22.01 10.1298 22.01 11.5098V15.5098C22.01 16.8898 20.89 18.0098 19.51 18.0098Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 18.0098V22.0098"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 22.0098H16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99 9.01001L7.98 7.80001C7.98 6.26001 9.24 5.00001 10.78 5.00001H13.21C14.75 5.00001 16.01 6.26001 16.01 7.80001V9.01001"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs text-gray-500 mt-1">
                        Parking
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === page
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
