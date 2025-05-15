import Agency from "@/Dashboard/Agency/pages/Agency";
import AgencyLayout from "@/Layouts/AgencyLayout";

const agencyRoutes = {
  path: "/agency",
  element: <AgencyLayout />,
  children: [
    {
      index: true,
      element: <Agency />,
    },
  ],
};

export default agencyRoutes;
