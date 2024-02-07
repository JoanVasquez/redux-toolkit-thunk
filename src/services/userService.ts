import { User } from "../models/user";
import { axiosConfig, axiosUtil } from "../utils/axiosUtil";
import { USER_ENDPOINTS } from "../utils/constants";
import { ICrudService } from "./ICrudService";

export class UserService implements ICrudService<User> {
  save(data: User): Promise<User> {
    return axiosUtil({
      url: `${USER_ENDPOINTS}`,
      method: "POST",
      data,
    } as axiosConfig);
  }

  delete(id: number): Promise<any> {
    return axiosUtil({
      url: `${USER_ENDPOINTS}/${id}`,
      method: "DELETE",
    } as axiosConfig);
  }

  findAll(): Promise<User[]> {
    return axiosUtil({
      url: USER_ENDPOINTS,
      method: "GET",
    } as axiosConfig);
  }
}
