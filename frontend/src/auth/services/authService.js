import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURI, ApiEndpoints, HTTP_METHOD } from "../../const/endpoint";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: baseURI,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  //get all users details
  endpoints: (builder) => ({
    getUsersDetails: builder.query({
      query: () => ({
        url: ApiEndpoints.GETUSER,
        method: HTTP_METHOD.GET,
        providesTags: ["allusers"],
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `${ApiEndpoints.DELETEUser}/${id}`,
        method: HTTP_METHOD.DELETE,
      }),

      invalidatesTags: ["allusers"],
    }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `${ApiEndpoints.UPDATEUser}/${user._id}`,
        method: HTTP_METHOD.PUT,
        body: user,
      }),
      // invalidatesTags: ["allusers"],
    }),
   
  }),
});

export const {
  useGetUsersDetailsQuery,
  useDeleteUserByIdMutation,
  useEditUserMutation,
} = authApi;
