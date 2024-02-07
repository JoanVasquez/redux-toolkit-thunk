import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersSlice } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumApi";
import { photosApi } from "./apis/photoApi";

export const store = configureStore({
  reducer: {
    [usersSlice.reducerPath]: usersSlice.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export * from "./thunks/addUser";
export * from "./thunks/fetchUser";
export * from "./thunks/removeUser";
