import React from "react";
import villa from "../../../assets/images/villa.jpg"
import CommonHeader from "../HomeHeader";

const VillaJourney: React.FC = () => {
  return (
    <section className="relative w-full h-[500px]" 
 style={{ backgroundImage: `url(${villa})`,
      backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}
    
    >
      <div className="absolute inset-0 bg-[#00000075]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full  text-center px-4">
        <CommonHeader>   <h1 className="pb-[88px] ">
          Start Your Villa Journey Today!
        </h1> </CommonHeader>
      
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition text-lg font-bold">
            Browse Villas
          </button>
          <button className="px-6 py-3 bg-[#F1B037] hover:bg-yellow-400 text-black  rounded-full transition text-lg font-bold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default VillaJourney;
