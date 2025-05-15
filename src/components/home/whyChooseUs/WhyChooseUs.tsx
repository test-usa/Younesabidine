
import whychooseus from "../../../assets/images/whychooseus.png"
import CommonWrapper from "@/common/CommonWrapper";

import villas1 from "../../../assets/images/Villas1.svg"
import Listings from "../../../assets/images/Listings.svg"
import Villas2 from "../../../assets/images/Villas2.svg"
import Secure from "../../../assets/images/Secure.svg"
import Booking from "../../../assets/images/Booking.svg"
import Room from "../../../assets/images/chooseRoom.png"
import HomeSectionHeader from "../HomeSectionHeader";
import HomeButton from "../HomeButton";


type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function WhyChooseUs() {
  return (
  
     
    <div className="  mx-auto  bg-[#FAFAFA;]" 
      style={{ backgroundImage: `url(${whychooseus})`,
      backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}
     
      >
<CommonWrapper>
     <HomeSectionHeader>
   
         <h2  className=" text-center">Why Choose Us</h2>
     
   </HomeSectionHeader>
 <CommonWrapper>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:pt-[85px] pt-[50px]">
          {/* First row */}
          <FeatureCard
            icon={<img src={villas1} alt="Villas Icon" className="w-6 h-6" />}
            title="Wide Selection of Luxury Villas"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
            icon={<img src={Listings} alt="Villas Icon" className="w-6 h-6" />}
            title="Verified Listings"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
           icon={<img src={Villas2} alt="Villas Icon" className="w-6 h-6" />}
            title="Wide Selection of Luxury Villas"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          {/* Second row */}
          <FeatureCard
            icon={<img src={Secure} alt="Villas Icon" className="w-6 h-6" />}
            title="Secure Transactions"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
           icon={<img src={Booking} alt="Villas Icon" className="w-6 h-6" />}
            title="Flexible Booking"
            description="Enjoy flexible booking options tailored to your schedule and preferences. Modify, reschedule, or cancel with ease for a stress-free experience."
          />

        
          <div className="md:col-span-1 h-[300px] p-2">
            <img src={Room } alt="Room" className="w-full h-full object-cover rounded-lg " />
          </div>
        </div>
 </CommonWrapper>
     
</CommonWrapper>
      </div>
   
  )
}

function FeatureCard({ icon, title, description }:FeatureCardProps) {
  return (

       <div className="bg-white p-6 rounded-lg shadow-sm  ">
  
        
      <div className="flex flex-col items-start ">
        <div className="bg-[#FDF2E0] p-3 rounded-full mb-6">{icon}</div>
        <h3 className="text-lg font-medium  mb-[10px] ">{title}</h3>
        <p className="text-[#333333CC] text-sm mb-7">{description}</p>
     <HomeButton> Learn More</HomeButton> 
      </div>
    </div>

  )
}
