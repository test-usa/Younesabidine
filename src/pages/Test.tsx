import { useState, useEffect } from "react";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wifi,
  MapPin,
} from "lucide-react";

import img1 from "../assets/images/hero.png";
import img2 from "../assets/images/hero2.jpeg";
import img3 from "../assets/images/hero3.jpeg";
import img4 from "../assets/images/hero1.jpeg";
import Navbar from "@/components/home/Navbar";
import Tabs from "@/components/home/Tabs";
import HomeButton from "@/components/home/HomeButton";
// Hero slider data
const heroSlides = [
  {
    id: 1,
    img: img1,
    title: "Discover Your Perfect Villa Today",
    description:
      "Enjoy flexible booking options tailored to your schedule and preferences. Modify, reschedule or cancel with ease for a stress-free experience. Our hassle-free system allows you to adjust your plans anytime.",
  },
  {
    id: 2,
    img: img4,
    title: "Experience Luxury Living",
    description:
      "Indulge in our premium selection of villas designed for comfort and elegance. Each property is carefully curated to provide an exceptional living experience.",
  },
  {
    id: 3,
    img: img3,
    title: "Beachfront Paradise Awaits",
    description:
      "Wake up to stunning ocean views and pristine beaches. Our beachfront villas offer the ultimate vacation experience with direct access to sandy shores.",
  },
];

// Featured properties data
const featuredProperties = [
  {
    id: 1,
    title: "Luxury House in Greenville",
    price: 1200,
    priceType: "Rent",
    location: "Bali, Indonesia",
    bedrooms: 3,
    bathrooms: 2,
    img: "/placeholder.svg?height=300&width=400&text=Luxury+House",
    amenities: ["wifi", "pool", "parking"],
  },
  {
    id: 2,
    title: "Modern Condo for Sale",
    price: 3500,
    priceType: "Rent",
    location: "Manhattan, New York",
    bedrooms: 2,
    bathrooms: 2,
    img: "/placeholder.svg?height=300&width=400&text=Modern+Condo",
    amenities: ["wifi", "pool", "parking"],
  },
  {
    id: 3,
    title: "Apartment with Suburbian",
    price: 1300,
    priceType: "Rent",
    location: "Jersey City, Riverside",
    bedrooms: 3,
    bathrooms: 2,
    img: "/placeholder.svg?height=300&width=400&text=Apartment",
    amenities: ["wifi", "pool", "parking"],
  },
  {
    id: 4,
    title: "Three Room Apartment",
    price: 950,
    priceType: "Rent",
    location: "London, United Kingdom",
    bedrooms: 1,
    bathrooms: 1,
    img: "/placeholder.svg?height=300&width=400&text=Three+Room+Apartment",
    amenities: ["wifi", "pool", "parking"],
  },
  {
    id: 5,
    title: "Suburb Home for Sale",
    price: 1200,
    priceType: "Rent",
    location: "Jersey City, The Heights",
    bedrooms: 2,
    bathrooms: 1,
    img: "/placeholder.svg?height=300&width=400&text=Suburb+Home",
    amenities: ["wifi", "pool", "parking"],
  },
  {
    id: 6,
    title: "Gorgeous Home for Sale in Jersey",
    price: 1150,
    priceType: "Rent",
    location: "Bali, Indonesia",
    bedrooms: 2,
    bathrooms: 2,
    img: "/placeholder.svg?height=300&width=400&text=Gorgeous+Home",
    amenities: ["wifi", "pool", "parking"],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Auto-advance slides
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentHeroSlide = heroSlides[currentSlide];

  // Pagination for properties
  const totalPages = Math.ceil(featuredProperties.length / propertiesPerPage);
  const paginatedProperties = featuredProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[700px] max-h-[800px]">
        {/* Hero Background img Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.img || "/placeholder.svg"}
                alt={`Luxury villa ${index + 1}`}
                className="object-cover brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          {/* Navigation */}
          <Navbar />
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 md:pt-32 md:pb-48">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-opacity duration-500">
              {currentHeroSlide.title}
            </h1>
            <p className="text-white opacity-80  font-normal max-w-2xl mb-12 text-lg transition-opacity duration-500">
              {currentHeroSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <HomeButton className="  !rounded-full flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors">
                Explore Rentals
                <ArrowRight className="w-5 h-5" />
              </HomeButton>
              <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white cursor-pointer hover:text-gray-800 transition-colors">
                View Properties for Sale
              </button>
            </div>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 md:ml-8 z-20">
            <button
              onClick={goToPrevSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 md:mr-8 z-20">
            <button
              onClick={goToNextSlide}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Search Section */}
          <Tabs />
        </div>
      </div>

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
}
