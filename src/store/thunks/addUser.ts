import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import { User } from "../../models/user";

export const addUser = createAsyncThunk("users/add", async (user: User) =>
  new UserService().save(user)
);
