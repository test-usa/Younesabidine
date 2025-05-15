import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import RootRoutes from "./routes/RootRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={RootRoutes} />
    <ToastContainer position="top-center" autoClose={2000} />
  </StrictMode>
);
