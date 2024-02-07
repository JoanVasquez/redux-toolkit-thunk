import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import { User } from "../../models/user";
import { ICrudService } from "../../services/ICrudService";

export const removeUser = createAsyncThunk(
  "users/remove",
  async (id: number) => {
    const iCrudService: ICrudService<User> = new UserService();
    iCrudService.delete!(id);
  }
);
