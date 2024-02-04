import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/user.service";

export const fetchUsers = createAsyncThunk("users/fetch", async () =>
  new UserService().findAll()
);
