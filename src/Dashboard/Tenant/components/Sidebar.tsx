import logo from "../../../assets/images/dashlogo.png";
import { useState } from "react";
import home from "../../../assets/dashicon/home.png";
import listing from "../../../assets/dashicon/propertyListing.png";
import realState from "../../../assets/dashicon/realstate.png";
import communication from "../../../assets/dashicon/communication.png";
import dispute from "../../../assets/dashicon/dispute.svg";
import setting from "../../../assets/dashicon/setting.png";
import upcoming from "../../../assets/dashicon/upComming.svg";
import digital from "../../../assets/dashicon/digitalContact.png";
import contact from "../../../assets/dashicon/contact.svg";

const sidebarList = [
  { label: "Home", tab: "home", icon: home },
  {
    label: "Property Overview",
    tab: "property-overview",
    icon: listing,
  },
  {
    label: "Upcoming Payments",
    tab: "upcoming-payments",
    icon: upcoming,
  },
  {
    label: "Rental Agreements",
    tab: "rental-agreements",
    icon: contact,
  },
  {
    label: "Reviews & Ratings",
    tab: "reviews-ratings",
    icon: digital,
  },
  {
    label: "Dispute Management",
    tab: "dispute-management",
    icon: dispute,
  },
  {
    label: "Support",
    tab: "support",
    icon: realState,
  },
  {
    label: "Communication",
    tab: "communication",
    icon: communication,
  },
  {
    label: "Settings",
    tab: "settings",
    icon: setting,
  },
];

interface Sidebar {
  setActiveTab: (item: string) => void;
}
const Sidebar: React.FC<Sidebar> = ({ setActiveTab }) => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-[240px] bg-white border-r border-[#e4e4e4] flex flex-col">
      <div className="p-6">
        <div className=" max-w-34">
          <img src={logo} className="" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2 p-2">
        {sidebarList.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label);
              setActiveTab(item.tab);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
                ${
                  active === item.label
                    ? "  font-semibold  bg-dashboard text-[#283F3A]"
                    : " bg-white text-[#283F3A] "
                }`}
          >
            <div>
              <img src={item.icon} alt={item.label} />
            </div>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
