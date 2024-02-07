import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import { User } from "../../models/user";
import { ICrudService } from "../../services/ICrudService";

export const addUser = createAsyncThunk("users/add", async (user: User) => {
  const iCrudService: ICrudService<User> = new UserService();
  return iCrudService.save!(user);
});
