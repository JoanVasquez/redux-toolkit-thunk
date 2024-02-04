import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";

export const fetchUsers = createAsyncThunk("users/fetch", async () =>
  new UserService().findAll()
);
