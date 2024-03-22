import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:3000";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // Add contact details
    addContact: builder.mutation({
      query: (initialContact) => ({
        url: "/api/contactus",
        method: "POST",
        body: initialContact,
      }),
      invalidatesTags: ["contactus"],
    }),
    //get contact details
    get_Contactus: builder.query({
      // get: 'http://localhost:8000/api/contactus'
      query: () => "/api/contactus",
      providesTags: ["contactus"],
    }),
 }),
});

export default apiSlice;