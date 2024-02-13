import { type AxiosResponse } from 'axios'
import request from '../apiClient'

export const getAllUsers = async (): Promise<AxiosResponse> => {
  return await request('GET', '/')
}

export const getUser = async (id: string): Promise<AxiosResponse> => {
  return await request('GET', `/${id}`)
}

export const createUser = async (user: unknown): Promise<AxiosResponse> => {
  return await request('POST', '/', JSON.stringify(user))
}

export const updateUser = async (id: string, user: unknown): Promise<AxiosResponse> => {
  return await request('PUT', `/${id}`, JSON.stringify(user))
}

export const deleteUser = async (id: string): Promise<AxiosResponse> => {
  return await request('DELETE', `/${id}`)
}
