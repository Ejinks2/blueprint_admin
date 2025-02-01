import axios, {
  type AxiosRequestConfig,
  type Method,
  type AxiosResponse,
} from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:8080/api/v1",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  withCredentials: true,
} satisfies AxiosRequestConfig);

const request = async (
  method: Method,
  url: string,
  params?: unknown,
): Promise<AxiosResponse> => {
  return await apiClient.request({ method, url, params });
};

export default request;
