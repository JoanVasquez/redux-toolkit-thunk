import { User } from "../models/user";
import { axiosConfig, axiosUtil } from "../utils/axiosUtil";
import { userEndPoint } from "../utils/endPoints";
import { ICrudService } from "./ICrudService";

export class UserService implements ICrudService<User> {
  save(data: User): Promise<User> {
    return axiosUtil({
      url: `${userEndPoint}`,
      method: "POST",
      data,
    });
  }

  delete(id: number): Promise<any> {
    return axiosUtil({
      url: `${userEndPoint}/${id}`,
      method: "DELETE",
    });
  }

  findAll(): Promise<User[]> {
    return axiosUtil({
      url: userEndPoint,
      method: "GET",
    } as axiosConfig);
  }
}
