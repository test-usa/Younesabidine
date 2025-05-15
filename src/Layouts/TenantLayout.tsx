import { Outlet } from "react-router-dom";

const TenantLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default TenantLayout;
