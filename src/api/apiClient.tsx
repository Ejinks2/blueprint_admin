import axios, { type AxiosRequestConfig } from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
} satisfies AxiosRequestConfig)

export default apiClient
