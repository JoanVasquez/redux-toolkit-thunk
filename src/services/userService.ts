import { USER_ENDPOINTS } from "../utils/constants";
import { BaseService } from "./baseService";

export class UserService extends BaseService {
  constructor() {
    super(USER_ENDPOINTS);
  }
}
