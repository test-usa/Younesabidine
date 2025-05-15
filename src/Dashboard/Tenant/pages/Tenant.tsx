import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Communication from "./Communication";
import SettingsPage from "./SettingsPage";
import TopBar from "../../Common/TopBar";
import DisputeManagement from "./DisputeManagement";
import ReviewsRatings from "./ReviewsRatings";
import Support from "./Support";
import RentalAgreements from "./RentalAgreements";
import UpcomingPayments from "./UpcomingPayments";
import PropertyOverview from "./PropertyOverview";

const Tenant = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-auto">
        <TopBar />

        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#333333]">
            Tenant Dashboard
          </h1>
        </div>

        {activeTab === "home" && <Home />}
        {activeTab === "property-overview" && <PropertyOverview />}
        {activeTab === "upcoming-payments" && <UpcomingPayments />}
        {activeTab === "rental-agreements" && <RentalAgreements />}
        {activeTab === "reviews-ratings" && <ReviewsRatings />}
        {activeTab === "dispute-management" && <DisputeManagement />}
        {activeTab === "support" && <Support />}
        {activeTab === "communication" && <Communication />}
        {activeTab === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};
export default Tenant;
