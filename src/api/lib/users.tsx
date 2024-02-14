import { type AxiosResponse } from 'axios'
import request from '../apiClient'

export const getAllUsers = async (): Promise<AxiosResponse> => {
  return await request('GET', '/v1/users/all')
}

export const addUser = async (user: unknown): Promise<AxiosResponse> => {
  return await request('POST', '/v1/users/user', JSON.stringify(user))
}

export const updateUser = async (username: string, user: unknown): Promise<AxiosResponse> => {
  return await request('PUT', `/v1/users/user?username=${username}`, JSON.stringify(user))
}

export const deleteUser = async (username: string): Promise<AxiosResponse> => {
  return await request('DELETE', `/v1/users/user?username=${username}`)
}
