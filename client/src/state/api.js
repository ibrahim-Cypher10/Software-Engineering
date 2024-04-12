import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API configuration
export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL || "http://localhost:9000",
  }),
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "Advertisements",  // Adding new tag type for advertisements
  ],
  // Define API endpoints
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getAdvertisements: build.query({
      query: () => "advertisements",
      providesTags: (result, error, arg) => result
        ? [...result.map(({ _id }) => ({ type: "Advertisements", id: _id }))]
        : ["Advertisements"],
    }),
    updateAdvertisementStatus: build.mutation({
      query: ({ adId }) => ({
        url: `advertisements/${adId}/activate`, // Ensure this matches the endpoint expected by the backend
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Advertisements', id: 'LIST'}], // Invalidate cache to refresh data
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetAdvertisementsQuery,
  useUpdateAdvertisementStatusMutation,
} = api;
