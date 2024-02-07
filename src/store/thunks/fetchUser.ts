import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import { User } from "../../models/user";
import { ICrudService } from "../../services/ICrudService";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const iCrudService: ICrudService<User> = new UserService();
  return iCrudService.findAll!();
});
