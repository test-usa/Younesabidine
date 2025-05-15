// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AdminStoreType } from "./AdminStoreType";

// const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
// });

// export const UseAdminStore = create<AdminStoreType>()(
//   persist(
//     (set, get) => ({
//       user: null,
//       token: "",
//     }),

//     {
//       name: "user",
//       partialize: (state) => ({ token: state.token, user: state.user }),
//     }
//   )
// );
