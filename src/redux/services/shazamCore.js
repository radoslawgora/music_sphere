import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        // eslint-disable-next-line comma-dangle
<<<<<<< HEAD
        '4ec344a8e2msh51431829ad370ccp146b28jsnb2360ade8676'
=======
        '####'
>>>>>>> 78c0c48aaa64d63f1e8f6ad882b09cd92f586f6c
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({
      query: (songid) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) => `songs/list-recommendations?key=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/get-details?id=${artistId}`,
    }),
    getArtistTop: builder.query({
      query: (artistId) => `artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `charts/track?locale=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
