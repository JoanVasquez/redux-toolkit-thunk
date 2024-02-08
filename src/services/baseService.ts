import axios from "axios";
import { User } from "../models/user";
import { ICrudService } from "./ICrudService";

export abstract class BaseService implements ICrudService<User> {
  constructor(private endPoint: string) {}

  async save(data: User): Promise<User> {
    try {
      const response = await axios.post(this.endPoint, data);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async update(id: number, data: User): Promise<User> {
    try {
      const response = await axios.put(`${this.endPoint}/${id}`, data);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async delete(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.endPoint}/${id}`);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async findAll(): Promise<User[]> {
    try {
      const response = await axios.get(this.endPoint);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async findById(id: number): Promise<User> {
    try {
      const response = await axios.get(`${this.endPoint}/${id}`);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
}
