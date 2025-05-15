import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const locationOptions = [
  "Any Location",
  "Bali, Indonesia",
  "Manhattan, New York",
  "Jersey City, Riverside",
  "London, United Kingdom",
  "Jersey City, The Heights",
];

// Property type options
const propertyTypeOptions = [
  "Any Type",
  "House",
  "Apartment",
  "Condo",
  "Villa",
  "Townhouse",
];

// Price range options
const priceRangeOptions = {
  buy: [
    "Any Price",
    "$100k - $200k",
    "$200k - $300k",
    "$300k - $400k",
    "$400k - $500k",
    "$500k+",
  ],
  rent: [
    "Any Price",
    "$500 - $1000",
    "$1000 - $1500",
    "$1500 - $2000",
    "$2000 - $2500",
    "$2500+",
  ],
  sales: [
    "Any Price",
    "$100k - $300k",
    "$300k - $500k",
    "$500k - $700k",
    "$700k - $900k",
    "$900k+",
  ],
};

// Bedroom options
const bedroomOptions = [
  "Any Bedrooms",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];

// Amenity options
const amenityOptions = [
  "Any Amenities",
  "WiFi",
  "Pool",
  "Parking",
  "Gym",
  "Balcony",
  "Garden",
];

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import TabSelect from "./TabSelect";
import TwoButton from "./TwoButton";
const HomeTabs = ({ activeTab, setActiveTab }) => {
  const [filters, setFilters] = useState({
    location: "Any Location",
    propertyType: "Any Type",
    priceRange: "Any Price",
    bedrooms: "Any Bedrooms",
    amenities: "Any Amenities",
  });

  console.log("filters", filters);
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };
  return (
    <>
      <div className=" rounded-lg shadow-xl overflow-hidden">
        <Tabs
          defaultValue="buy"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className=" max-w-50 mx-auto grid grid-cols-3 gap-[1px] rounded-sm  ">
            <TabsTrigger
              value="buy"
              className="py-4 px-6 data-[state=active]:bg-white data-[state=inactive]:bg-white/20 data-[state=active]:text-[#313131] data-[state=inactive]:text-white data-[state=inactive]:border data-[state=inactive]:border-white/20 t    text-base rounded-t-md"
            >
              Buy
            </TabsTrigger>
            <TabsTrigger
              value="sales"
              className="py-4 px-6 data-[state=active]:bg-white data-[state=inactive]:bg-white/20 data-[state=active]:text-[#313131] data-[state=inactive]:text-white data-[state=inactive]:border data-[state=inactive]:border-white/20 t    text-base rounded-t-md"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger
              value="rent"
              className="py-4 px-6 data-[state=active]:bg-white data-[state=inactive]:bg-white/20 data-[state=active]:text-[#313131] data-[state=inactive]:text-white data-[state=inactive]:border data-[state=inactive]:border-white/20 t    text-base rounded-t-md"
            >
              Rent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buy" className=" bg-white p-10 rounded-lg">
            <div className=" flex  justify-between items-center gap-6">
              <div className="flex  items-center gap-6">
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.buy}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Amenities
                  </label>

                  <TabSelect
                    title="Enter a amenities"
                    object={amenityOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
              </div>

              <TwoButton />
            </div>
          </TabsContent>
          <TabsContent value="sales" className=" bg-white p-10 rounded-lg">
            <div className=" flex  justify-between items-center gap-6">
              <div className="flex  items-center gap-6">
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.sales}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Amenities
                  </label>

                  <TabSelect
                    title="Enter a amenities"
                    object={amenityOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
              </div>

              <TwoButton />
            </div>
          </TabsContent>
          <TabsContent value="rent" className=" bg-white p-10 rounded-lg">
            <div className=" flex  justify-between items-center gap-6">
              <div className="flex  items-center gap-6">
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.rent}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Amenities
                  </label>

                  <TabSelect
                    title="Enter a amenities"
                    object={amenityOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
              </div>

              <TwoButton />
            </div>
          </TabsContent>

          {/* <TabsContent value="sales" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                  >
                    {locationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.propertyType}
                    onChange={(e) =>
                      handleFilterChange("propertyType", e.target.value)
                    }
                  >
                    {propertyTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.priceRange}
                    onChange={(e) =>
                      handleFilterChange("priceRange", e.target.value)
                    }
                  >
                    {priceRangeOptions.sales.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.bedrooms}
                    onChange={(e) =>
                      handleFilterChange("bedrooms", e.target.value)
                    }
                  >
                    {bedroomOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amenities
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.amenities}
                    onChange={(e) =>
                      handleFilterChange("amenities", e.target.value)
                    }
                  >
                    {amenityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <TwoButton />
          </TabsContent> */}
          {/* 
          <TabsContent value="rent" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                  >
                    {locationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.propertyType}
                    onChange={(e) =>
                      handleFilterChange("propertyType", e.target.value)
                    }
                  >
                    {propertyTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.priceRange}
                    onChange={(e) =>
                      handleFilterChange("priceRange", e.target.value)
                    }
                  >
                    {priceRangeOptions.rent.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.bedrooms}
                    onChange={(e) =>
                      handleFilterChange("bedrooms", e.target.value)
                    }
                  >
                    {bedroomOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amenities
                </label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none"
                    value={filters.amenities}
                    onChange={(e) =>
                      handleFilterChange("amenities", e.target.value)
                    }
                  >
                    {amenityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <TwoButton />
          </TabsContent> */}
        </Tabs>
      </div>
    </>
  );
};

export default HomeTabs;
