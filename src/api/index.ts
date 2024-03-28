import { AxiosRequestConfig } from "axios";
import instance from "./instance.ts";

export const getData = async (
  url: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  try {
    const response = await instance.get<any>(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  try {
    const response = await instance.post<any>(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
