import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import ContactUs from "@/pages/ContactUs";
import DreamVilla from "@/pages/DreamVilla";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import VillasForRent from "@/pages/VillasforRent";
import VillasForSale from "@/pages/VillasForSale";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
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
]);

export default routes;
