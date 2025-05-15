import Admin from "@/Dashboard/Admin/pages/Admin";
import AdminLayout from "@/Layouts/AdminLayout";

const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <Admin />,
    },
  ],
};

export default adminRoutes;
