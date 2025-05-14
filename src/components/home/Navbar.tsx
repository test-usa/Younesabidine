import CommonWrapper from "@/common/CommonWrapper";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HomeButton from "./HomeButton";

const menulist = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Villas for Rent", path: "/villas-for-rent" },
  { label: "Villas for Sale", path: "/villas-for-sale" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  return (
    <CommonWrapper>
      <div className="w-full flex items-center justify-between py-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="ABWAB Logo" />
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="flex-1 lg:flex hidden justify-center gap-2 lg:gap-6">
          {menulist.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-white hover:text-home transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 text-sm border border-white text-white rounded hover:bg-home hover:border-transparent hover:text-[#030303] transition-colors"
          >
            Login
          </Link>
          <HomeButton className=" hidden sm:block">
            Find Your Dream Villa
          </HomeButton>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Navbar;
