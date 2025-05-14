import CommonWrapper from "@/common/CommonWrapper";
import HowItWorks from "@/components/home/howItWorks/HowItWorks";
import TestimonialCarousel from "@/components/home/TestimonialCarousel/TestimonialCarousel";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";

import { Link } from "react-router-dom";

const Home = () => {
  const menulist = [
    {
      label: "Home",

      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Villas for Rent",
      path: "/villas-for-rent",
    },
    {
      label: "Villas for Sale",
      path: "/villas-for-sale",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
    {
      label: "Login",
      path: "/login",
    },
    {
      label: "Find Your Dream Villa",
      path: "/find-your-dream-villa",
    },
  ];

  return (
    <CommonWrapper className="text-black">
      <div className="w-full flex items-center bg-home  justify-center gap-10 ">
        {menulist.map((item, i) => (
          <div key={i} className="py-4">
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
      <WhyChooseUs/>
      <TestimonialCarousel />
      <HowItWorks />
    </CommonWrapper>
  );
};

export default Home;
