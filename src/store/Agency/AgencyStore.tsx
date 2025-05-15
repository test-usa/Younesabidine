// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AgencyStoreType } from "./AgencyStoreType";

// const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
// });

// export const UseAgencyStore = create<AgencyStoreType>()(
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
