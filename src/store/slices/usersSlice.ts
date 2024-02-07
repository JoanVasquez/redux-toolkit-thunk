import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { fetchUsers } from "../thunks/fetchUser";
import { removeUser } from "../thunks/removeUser";
import { addUser } from "../thunks/addUser";
import {
  addingReducer,
  fetchingReducer,
  loadingReducer,
  rejectedReducer,
  removeReducer,
} from "../../utils/reducerUtil";

interface stateProps {
  isLoading: boolean;
  data: Array<User>;
  error: string;
}

const initialState: stateProps = {
  isLoading: false,
  data: [],
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, loadingReducer);
    builder.addCase(fetchUsers.fulfilled, fetchingReducer);
    builder.addCase(fetchUsers.rejected, rejectedReducer);
    builder.addCase(addUser.pending, loadingReducer);
    builder.addCase(addUser.fulfilled, addingReducer);
    builder.addCase(addUser.rejected, rejectedReducer);
    builder.addCase(removeUser.pending, loadingReducer);
    builder.addCase(removeUser.fulfilled, removeReducer);
    builder.addCase(removeUser.rejected, rejectedReducer);
  },
});

