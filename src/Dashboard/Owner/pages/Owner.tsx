import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Subscriptions from "./Subscriptions";
import RealEstateSupport from "./RealEstateSupport";
import Communication from "./Communication";
import SettingsPage from "./SettingsPage";
import TopBar from "../../Common/TopBar";
import DisputeManagement from "./DisputeManagement";
import ReviewsRatings from "./ReviewsRatings";
import TenantManagement from "./TenantManagement";
import ContractManagement from "./ContractManagement";
import PropertyManagement from "./PropertyManagement";

const Owner = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-auto">
        <TopBar />

        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#333333]">Owner Dashboard</h1>
        </div>

        {activeTab === "home" && <Home />}
        {activeTab === "property-management" && <PropertyManagement />}
        {activeTab === "contract-management" && <ContractManagement />}
        {activeTab === "tenant-management" && <TenantManagement />}
        {activeTab === "reviews-ratings" && <ReviewsRatings />}
        {activeTab === "dispute-management" && <DisputeManagement />}
        {activeTab === "subscriptions" && <Subscriptions />}
        {activeTab === "real-estate-support" && <RealEstateSupport />}
        {activeTab === "communication" && <Communication />}
        {activeTab === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};
export default Owner;
