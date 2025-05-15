import Owner from "@/Dashboard/Owner/pages/Owner";
import OwnerLayout from "@/Layouts/OwnerLayout";

const ownerRoutes = {
  path: "/owner",
  element: <OwnerLayout />,
  children: [
    {
      index: true,
      element: <Owner />,
    },
  ],
};

export default ownerRoutes;
