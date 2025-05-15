import Developer from "@/Dashboard/Developer/pages/Developer";
import DeveloperLayout from "@/Layouts/DeveloperLayout";

const developerRoutes = {
  path: "/developer",
  element: <DeveloperLayout />,
  children: [
    {
      index: true,
      element: <Developer />,
    },
  ],
};

export default developerRoutes;
