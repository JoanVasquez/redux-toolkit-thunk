import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";

export const removeUser = createAsyncThunk("users/remove", async (id: number) =>
  new UserService().delete(id)
);
