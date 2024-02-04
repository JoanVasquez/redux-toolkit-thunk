import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../models/user";
import { faker } from "@faker-js/faker";
import { Album } from "../../models/album";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  tagTypes: ["UsersAlbums", "Album"],
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user: User) => [
          { type: "UsersAlbums", id: user.id },
        ],
        query: (user: User) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, albumId: string) => [
          { type: "Album", id: albumId },
        ],
        query: (albumId: string) => {
          return {
            url: `/albums/${albumId}`,
            method: "DELETE",
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user: User) => {
          const tags = result.map((album: Album) => ({
            type: "Album",
            id: album.id,
          }));
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
        query: (user: User) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
