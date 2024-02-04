import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/user.service";

export const removeUser = createAsyncThunk("users/remove", async (id: number) =>
  new UserService().delete(id)
);
