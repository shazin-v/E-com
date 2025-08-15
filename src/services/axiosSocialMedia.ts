// import { LocalStorage } from "@/utility/localstorage";
// import axios, { AxiosInstance } from "axios";
// import { axiosInstance } from "./axios";

// const BaseUrl = process.env.NEXT_PUBLIC_SOCIALMEDIA_URL;

// export class Axios {
//   private static instance: AxiosInstance;

//   // Create or return the existing Axios instance
//   static getInstance(): AxiosInstance {
//     Axios.instance =
//       Axios.instance ||
//       axios.create({
//         baseURL: BaseUrl,
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });

//     // Intercepting request to add Authorization header
//     Axios.instance.interceptors.request.use(
//       (config) => {
//         const pathname = window.location.pathname;

//         // Don't add authorization header for specific paths like lead-generation
//         if (pathname.includes("/lead-generation")) {
//           return config;
//         }

//         // Get token from localStorage
//         const UserToken = LocalStorage.getItem("accessToken");
//         const { headers } = config;
//         if (UserToken) {
//           headers.Authorization = `Bearer ${UserToken}`;
//         }

//         return config;
//       },
//       (error) => Promise.reject(error),
//     );

//     // Intercepting response to handle token expiration
//     Axios.instance.interceptors.response.use(
//       (response) => {
//         return response; // Return response if successful
//       },
//       async (error) => {
//         const originalRequest = error.config;
//         const pathname = window.location.pathname;

//         // Allow access to specific paths without authentication
//         if (pathname.includes("/lead-generation")) {
//           return Promise.reject(error);
//         }

//         // Check for 401 Unauthorized error
//         if (error?.response?.status === 401) {
//           const refresh_token = LocalStorage.getItem("refreshToken");

//           // If there's no refresh token, clear storage and redirect to login
//           if (!refresh_token) {
//             console.error("No refresh token, redirecting to login.");
//             LocalStorage.clear();
//             // Uncomment below if you want to redirect to the login page
//             window.location.href = "/login";
//             return Promise.reject(error);
//           }

//           // If refresh token exists but we haven't tried it yet, attempt token refresh
//           if (!originalRequest._retry) {
//             originalRequest._retry = true; // Prevent retry loops

//             try {
//               const response = await axiosInstance.post(
//                 `/auth/loginWithRefreshToken`,
//                 {
//                   token: refresh_token,
//                 },
//               );

//               if (response.data.success) {
//                 // Save new tokens
//                 LocalStorage.setItem(
//                   "accessToken",
//                   response?.data?.payload?.accessToken,
//                 );
//                 LocalStorage.setItem(
//                   "refreshToken",
//                   response?.data?.payload?.refreshToken,
//                 );
//                 LocalStorage.setItem(
//                   "userRole",
//                   response.data.payload.userRole,
//                 );

//                 // Update the Authorization header for future requests
//                 Axios.instance.defaults.headers.common.Authorization = `Bearer ${response?.data?.payload?.access_token}`;

//                 // Retry the original request with the new access token
//                 originalRequest.headers.Authorization = `Bearer ${response?.data?.payload?.access_token}`;
//                 // Retry the failed request
//                 return axios(originalRequest);
//               } else {
//                 // If token refresh fails, clear storage and redirect to login
//                 LocalStorage.clear();
//                 window.location.href = "/login"; // Uncomment to redirect to login
//               }
//             } catch (refreshError) {
//               // If the refresh fails, clear storage and redirect to login
//               console.error("Token refresh failed, redirecting to login.");
//               LocalStorage.clear();
//               window.location.href = "/login"; // Uncomment to redirect to login
//               return Promise.reject(refreshError);
//             }
//           }
//         }

//         // For other errors, reject the promise
//         return Promise.reject(error);
//       },
//     );

//     return Axios.instance;
//   }
// }

// // Exporting the axios instance to be used throughout the application
// export const axiosSocialmedia = Axios.getInstance();
