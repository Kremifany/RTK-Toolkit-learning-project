import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DOGS_API_KEY = "cbfb51a2-8466-4025-a3e2-ed8616edf311";
interface Breed {
  id: string;
  name: string;
  reference_image_id: string;
}
//////////////////////////very important:---------------------api slice caches the data for every unique combination of end point + query param---------------------
export const dogsApiSlice = createApi({
  //where are we keeping the data in the reducers
  reducerPath: "api",
  //how we going to fetch our data, rtk comes with his own wrapper rtk fetch query - base query
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(buider) {
    return {
      fetchBreeds: buider.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;
