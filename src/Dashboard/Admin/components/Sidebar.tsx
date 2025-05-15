import logo from "../../../assets/images/dashlogo.png";
import { useState } from "react";
import home from "../../../assets/dashicon/home.png";
import userManagement from "../../../assets/dashicon/usermanagement.png";
import listing from "../../../assets/dashicon/propertyListing.png";
import report from "../../../assets/dashicon/propertyReport.svg";
import digital from "../../../assets/dashicon/digitalContact.png";
import tenant from "../../../assets/dashicon/tenant.png";
import subscription from "../../../assets/dashicon/subscribe.png";
import realState from "../../../assets/dashicon/realstate.png";
import communication from "../../../assets/dashicon/communication.png";
import setting from "../../../assets/dashicon/setting.png";
const sidebarList = [
  { label: "Home", tab: "home", icon: home },
  {
    label: "User Management",
    tab: "user-management",
    icon: userManagement,
    hasSubmenu: true, // assuming dropdown
  },
  { label: "Property Listings", tab: "property-listings", icon: listing },
  { label: "Property Reports", tab: "property-reports", icon: report },
  { label: "Digital Contracts", tab: "digital-contracts", icon: digital },
  { label: "Tenant Ratings", tab: "tenant-ratings", icon: tenant },
  { label: "Subscriptions", tab: "subscriptions", icon: subscription },
  {
    label: "Real Estate Support",
    tab: "real-estate-support",
    icon: realState,
  },
  { label: "Communication", tab: "communication", icon: communication },
  { label: "Settings", tab: "settings", icon: setting },
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
