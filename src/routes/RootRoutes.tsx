import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import ContactUs from "@/pages/ContactUs";
import DreamVilla from "@/pages/DreamVilla";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import VillasForRent from "@/pages/VillasForRent";
import VillasForSale from "@/pages/VillasForSale";
import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./AdminRoutes";
import agencyRoutes from "./AgencyRoutes";
import developerRoutes from "./DeveloperRoutes";
import ownerRoutes from "./OwnerRoutes";
import tenantRoutes from "./TenantRoutes";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/villas-for-rent",
        element: <VillasForRent />,
      },
      {
        path: "/villas-for-sale",
        element: <VillasForSale />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/find-your-dream-villa",
        element: <DreamVilla />,
      },
    ],
  },
  adminRoutes,
  agencyRoutes,
  developerRoutes,
  tenantRoutes,
  ownerRoutes,
]);

export default RootRoutes;
