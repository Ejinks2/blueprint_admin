import axios, { type AxiosRequestConfig, type Method, type AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: 'https://auth.api.sitblueprint.com/api',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
} satisfies AxiosRequestConfig)

const request = async (method: Method, url: string, params?: unknown): Promise<AxiosResponse> => {
  return await apiClient.request({ method, url, params })
}

export default request
