import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wifi,
  MapPin,
} from "lucide-react";
const Tabs = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative">
        {/* Search Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button className="flex-1 py-4 px-6 bg-white text-gray-800 font-medium border-b-2 border-amber-500">
              Buy
            </button>
            <button className="flex-1 py-4 px-6 bg-gray-100 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              Sales
            </button>
            <button className="flex-1 py-4 px-6 bg-gray-100 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              Rent
            </button>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none">
                  <option>Enter Location</option>
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
                <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none">
                  <option>Property Type</option>
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
                <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none">
                  <option>Price Range</option>
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
                <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none">
                  <option>Bedrooms</option>
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
                <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-md appearance-none">
                  <option>Amenities</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex justify-end gap-4 p-6 pt-0">
            <button className="px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors">
              Search
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
              More Option
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
