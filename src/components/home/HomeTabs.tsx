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

import { useState } from "react";
import TabSelect from "./TabSelect";
import TwoButton from "./TwoButton";

interface HomeTabs {
  activeTab: string;
  setActiveTab: (value: string) => void;
}


const HomeTabs: React.FC<HomeTabs> = ({ activeTab, setActiveTab }) => {
  const [filters, setFilters] = useState({
    location: "Any Location",
    propertyType: "Any Type",
    priceRange: "Any Price",
    bedrooms: "Any Bedrooms",
    amenities: "Any Amenities",
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };
  return (
    <>
      <div className="w-full rounded-lg shadow-xl overflow-hidden">
        <Tabs
          defaultValue="buy"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className=" max-w-60 mx-auto grid grid-cols-3 gap-[1px] rounded-sm  ">
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

          <TabsContent value="buy" className=" bg-white py-10 px-5 rounded-lg w-full">
            <div className=" flex flex-col xl:flex-row  justify-between items-center ">
              <div className=" xl:w-5/6 w-full flex flex-col lg:flex-row  items-center gap-4">
                <div className=" w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full ">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.buy}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full ">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full ">
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
<div className="xl:1/6 mt-4">
   <TwoButton />
</div>
             
            </div>
          </TabsContent>
          <TabsContent value="sales" className=" bg-white p-10 rounded-lg">
            <div className=" flex flex-col xl:flex-row   justify-between items-center ">
              <div className=" xl:w-5/6 w-full flex flex-col lg:flex-row   items-center gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.sales}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
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

            <div className="xl:1/6 mt-4">
   <TwoButton />
</div>
            </div>
          </TabsContent>
          <TabsContent value="rent" className=" bg-white p-10 rounded-lg">
            <div className=" flex flex-col xl:flex-row   justify-between items-center gap-2">
              <div className=" xl:w-5/6 w-full flex flex-col lg:flex-row   items-center gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Location
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={locationOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a location"
                    object={propertyTypeOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Property Type
                  </label>

                  <TabSelect
                    title="Enter a price"
                    object={priceRangeOptions.rent}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium  text-black mb-2">
                    Bedrooms
                  </label>

                  <TabSelect
                    title="Enter a bedroom"
                    object={bedroomOptions}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
                <div className="w-full">
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

        <div className="xl:1/6 mt-4">
   <TwoButton />
</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default HomeTabs;
