"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import CommonWrapper from "@/common/CommonWrapper"
import HomeSectionHeader from "../home/HomeSectionHeader"
import man1 from "../../assets/images/man1.png"
import man2 from "../../assets/images/man2.png"
import man3 from "../../assets/images/man3.png"
import cottetions from "../../assets/images/cottetion.svg"
import HomeButton from "../home/HomeButton"

const testimonials = [
  {
    id: 1,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man1
  },
  {
    id: 2,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man2,
  },
  {
    id: 3,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man3,
  },
  {
    id: 4,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man2,
  },
  {
    id: 5,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man1
  },
  {
    id: 6,
    name: "Susan Barkley",
    location: "London, UK",
    text: "Booking was seamless, and the villa exceeded our expectations! Highly recommend!",
    rating: 5,
    image: man3,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3
  const totalTestimonials = testimonials.length

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - visibleTestimonials : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - visibleTestimonials ? 0 : prevIndex + 1
    )
  }

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + visibleTestimonials)

  return (
    <div className="w-full bg-[#F2F2F2] py-12 px-4 md:px-8 lg:px-16">
      <CommonWrapper>
        <div className="mx-auto">
          <HomeSectionHeader>
            <h2 className="text-center md:pb-[80px] pb-10">What Our Clients Say</h2>
          </HomeSectionHeader>

          <div className="relative">
            <button
              onClick={handlePrevious}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-wrap justify-center gap-6 overflow-hidden">
              {displayedTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col items-center border-0 shadow-sm relative rounded-lg"
                >
                  {/* Quotation icon */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 w-5 h-5 md:w-10 md:h-12 pb-5 ">
                    <img
                      src={cottetions}
                      alt="Quote"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 mt-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-medium text-center text-lg pb-2">{testimonial.name}</h3>
                  <p className="text-[#7D7C7C] text-sm text-center pb-2">{testimonial.location}</p>
                  <p className="text-[#616161] text-center text-sm pb-2">{testimonial.text}</p>

                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-[#F1B037]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <HomeButton>Read More Reviews</HomeButton>
          </div>
        </div>
      </CommonWrapper>
    </div>
  )
}
