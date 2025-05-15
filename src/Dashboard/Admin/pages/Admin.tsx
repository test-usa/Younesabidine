import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import UserManagement from "./UserManagement";
import PropertyReports from "./PropertyReports";
import PropertyListings from "./PropertyListings";
import DigitalContracts from "./DigitalContracts";
import TenantRatings from "./TenantRatings";
import Subscriptions from "./Subscriptions";
import RealEstateSupport from "./RealEstateSupport";
import Communication from "./Communication";
import SettingsPage from "./SettingsPage";
import TopBar from "../components/TopBar";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-auto">
        <TopBar />

        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#333333]">Admin Dashboard</h1>
        </div>

        {activeTab === "home" && <Home />}
        {activeTab === "user-management" && <UserManagement />}
        {activeTab === "property-listings" && <PropertyListings />}
        {activeTab === "property-reports" && <PropertyReports />}
        {activeTab === "digital-contracts" && <DigitalContracts />}
        {activeTab === "tenant-ratings" && <TenantRatings />}
        {activeTab === "subscriptions" && <Subscriptions />}
        {activeTab === "real-estate-support" && <RealEstateSupport />}
        {activeTab === "communication" && <Communication />}
        {activeTab === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};
export default Admin;
