import axios, { AxiosResponse } from "axios";

export interface axiosConfig {
  url: string;
  method: string;
  data?: any;
  headers?: any;
  params?: any;
}

export const axiosUtil = async (config: axiosConfig) => {
  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
