import { useState, useEffect } from "react";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import Navbar from "@/components/home/Navbar";
import HomeHeader from "@/components/home/HomeHeader";

import img1 from "../assets/images/hero.png";
import img2 from "../assets/images/hero6.webp";
import img3 from "../assets/images/hero5.jpeg";
import img4 from "../assets/images/hero3.jpeg";
import Tabs from "@/components/home/HomeTabs";
import HomeTabs from "@/components/home/HomeTabs";

import product1 from "../assets/images/image1.png";
import product3 from "../assets/images/image3.png";
import product4 from "../assets/images/image4.png";
import CommonWrapper from "@/common/CommonWrapper";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import HowItWorks from "@/components/home/howItWorks/HowItWorks";
import TestimonialCarousel from "@/components/home/TestimonialCarousel/TestimonialCarousel";
import VillaJourney from "@/components/home/villaJourney/VillaJourney";
import Footer from "@/components/home/Footer";
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
    img: img2,
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
    img: product1,
    amenities: ["wifi", "pool", "parking"],
    type: "rent",
  },
  {
    id: 2,
    title: "Modern Condo for Sale",
    price: 350000,
    priceType: "Sale",
    location: "Manhattan, New York",
    bedrooms: 2,
    bathrooms: 2,
    img: product4,
    amenities: ["wifi", "pool", "parking"],
    type: "sale",
  },
  {
    id: 3,
    title: "Apartment with Suburbian",
    price: 1300,
    priceType: "Rent",
    location: "Jersey City, Riverside",
    bedrooms: 3,
    bathrooms: 2,
    img: product1,
    amenities: ["wifi", "pool", "parking"],
    type: "rent",
  },
  {
    id: 4,
    title: "Three Room Apartment",
    price: 950,
    priceType: "Rent",
    location: "London, United Kingdom",
    bedrooms: 1,
    bathrooms: 1,
    img: product3,
    amenities: ["wifi", "pool", "parking"],
    type: "rent",
  },
  {
    id: 5,
    title: "Suburb Home for Sale",
    price: 420000,
    priceType: "Sale",
    location: "Jersey City, The Heights",
    bedrooms: 2,
    bathrooms: 1,
    img: product3,
    amenities: ["wifi", "pool", "parking"],
    type: "sale",
  },
  {
    id: 6,
    title: "Gorgeous Home for Sale in Jersey",
    price: 515000,
    priceType: "Sale",
    location: "Bali, Indonesia",
    bedrooms: 2,
    bathrooms: 2,
    img: product1,
    amenities: ["wifi", "pool", "parking"],
    type: "sale",
  },
];

// Location options

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("buy");
  const [filteredProperties, setFilteredProperties] =
    useState(featuredProperties);

  const propertiesPerPage = 6;

  //   // Auto-advance slides
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  // Filter properties based on active tab
  useEffect(() => {
    let filtered = featuredProperties;

    if (activeTab === "buy" || activeTab === "sales") {
      filtered = featuredProperties.filter(
        (property) => property.type === "sale"
      );
    } else if (activeTab === "rent") {
      filtered = featuredProperties.filter(
        (property) => property.type === "rent"
      );
    }

    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page when changing tabs
  }, [activeTab]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const currentHeroSlide = heroSlides[currentSlide];

  // Pagination for properties
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const paginatedProperties = filteredProperties.slice(
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
                className=" w-full"
                src={slide.img || "/placeholder.svg"}
                alt={`Luxury villa ${index + 1}`}
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
            <HomeHeader className="text-4xl md:text-6xl font-bold text-white mb-6 transition-opacity duration-500">
              {currentHeroSlide.title}
            </HomeHeader>
            <p className="text-white max-w-2xl mb-12 text-lg transition-opacity duration-500">
              {currentHeroSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-amber-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors">
                Explore Rentals
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-800 transition-colors">
                View Properties for Sale
              </button>
            </div>
          </div>

          {/* Slider Navigation */}
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

          {/* Search Section with Tabs */}

          <CommonWrapper>
            <div className=" w-full px-4   relative">
              <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </CommonWrapper>
        </div>
      </div>
      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              price={property.price}
              priceType={property.priceType}
              location={property.location}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              img={property.img}
              amenities={property.amenities}
            />
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

      <WhyChooseUs />
      <TestimonialCarousel />
      <HowItWorks />
      <VillaJourney />

      <Footer />
    </div>
  );
};
export default Home;
