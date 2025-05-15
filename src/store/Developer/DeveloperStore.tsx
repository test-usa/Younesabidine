// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { DeveloperStoreType } from "./DeveloperStoreType";

// const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
// });

// export const UseDeveloperStore = create<DeveloperStoreType>()(
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
