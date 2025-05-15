
import CommonWrapper from '@/common/CommonWrapper';

import search from "../../../assets/images/search.svg"
import book from "../../../assets/images/book.svg"
import enjoy from "../../../assets/images/enjoy.svg"
import HomeSectionHeader from '../HomeSectionHeader';
import room1 from "../../../assets/images/Room1.png"
import room2 from "../../../assets/images/Room2.png"
import room3 from "../../../assets/images/Room3.png"           
import room4 from "../../../assets/images/Room4.png"           


const steps = [
  {
    id: 1,
    icon: search,
    title: 'Search',
    description: 'Find your ideal villa using our advanced filters.',
  },
  {
    id: 2,
    icon:book,
    title: 'Book',
    description: 'Secure your booking with a few clicks.',
  },
  {
    id: 3,
    icon: enjoy,
    title: 'Enjoy',
    description: 'Relax and enjoy your stay.',
  },
];



const HowItWorks = () => {
  return (
    <section className=" py-16 bg-white ">
   <CommonWrapper>
       <div className=" mx-auto">
       
        
        <div className="flex flex-col lg:flex-row gap-10">
            
          {/* Left side with steps and dot border */}
          <div className="w-full lg:w-2/5 relative p-2">
            <div className="flex flex-col space-y-12">
                <HomeSectionHeader> <h2 className=" md:text-left  text-center">How It Works</h2> </HomeSectionHeader>
              
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start relative">
                  {/* Dot and connecting line */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full  flex items-center justify-center border-2 border-[#F1B037] z-10 relative">
                      <img src={step.icon} alt="" />
                    </div>
                    
                    {/* Connecting dotted line, except for the last item */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 h-[calc(100%+24px)] -translate-x-1/2 border-l-2 border-dashed border-[#A7BCF2]"></div>
                    )}
                  </div>
                  
                  {/* Step content */}
                  <div className="ml-6 pt-1">
                    <h3 className="md:text-lg text-base font-semibold text-[#000000] mb-1">{step.title}</h3>
                    <p className="text-[#4B4B4B] text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side with images */}
          <div className="w-full lg:w-3/5">
  {/* First Row */}
  <div className="flex flex-row gap-4 p-2">
    <div className="w-1/2 md:w-[40%]">
      <img src={room1} alt="" className="w-full h-full rounded-lg mb-4 sm:mb-0" />
    </div>
    <div className="w-1/2 md:w-[60%]">
      <img src={room2} alt="" className="w-full h-full rounded-lg" />
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-row gap-4  p-2">
    <div className="w-1/2">
      <img src={room3} alt="" className="w-full h-full rounded-lg mb-4 sm:mb-0" />
    </div>
    <div className="w-1/2">
      <img src={room4} alt="" className="w-full h-full rounded-lg" />
    </div>
  </div>
</div>

        </div>
      </div>
   </CommonWrapper>
    </section>
  );
};

export default HowItWorks;