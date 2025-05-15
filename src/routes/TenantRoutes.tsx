import Tenant from "@/Dashboard/Tenant/pages/Tenant";
import TenantLayout from "@/Layouts/TenantLayout";

const tenantRoutes = {
  path: "/tenant",
  element: <TenantLayout />,
  children: [
    {
      index: true,
      element: <Tenant />,
    },
  ],
};

export default tenantRoutes;
