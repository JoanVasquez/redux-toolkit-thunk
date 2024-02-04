import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Photo } from "../../models/photo";
import { Album } from "../../models/album";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  tagTypes: ["Photo", "AlbumPhoto"],
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album: Album) => {
          const tags = result.map((photo: Photo) => ({
            type: "Photo",
            id: album.id,
          }));
          tags.push({ type: "AlbumPhoto", id: album.id });
          return tags;
        },
        query: (album: Album) => ({
          url: "/photos",
          params: {
            albumId: album.id,
          },
          method: "GET",
        }),
      }),

      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => [
          { type: "AlbumPhoto", id: album.id },
        ],
        query: (album: Album) => ({
          method: "POST",
          url: "/photos",
          body: {
            albumId: album.id,
            url: faker.image.abstract(150, 150, true),
          },
        }),
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo: Photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo: Photo) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
