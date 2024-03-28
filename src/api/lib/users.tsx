import { type AxiosResponse, AxiosError } from 'axios'
import request from '../apiClient'
import type { User } from '../../types/index'

const API_NAME = 'User Management'

export const getAllUsers = async (): Promise<AxiosResponse> => {
  try {
    const response = await request('GET', '/v1/users/all')
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}

export const getUser = async (username: string): Promise<AxiosResponse> => {
  try {
    const response = await request('GET', `/v1/users/user?username=${username}`)
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}

export const addUser = async (user: User): Promise<AxiosResponse> => {
  try {
    const response = await request('POST', '/v1/users/user', JSON.stringify(user))
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}

export const updateUser = async (username: string, user: User): Promise<AxiosResponse> => {
  try {
    const response = await request('PUT', `/v1/users/user?username=${username}`, JSON.stringify(user))
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}

export const deleteUser = async (username: string): Promise<AxiosResponse> => {
  try {
    const response = await request('DELETE', `/v1/users/user?username=${username}`)
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}

export const getMemberSizeWeeklyChange = async (): Promise<AxiosResponse> => {
  try {
    const response = await request('GET', '/v1/users/memberSizeWeeklyChange')
    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`${API_NAME} Error: ${error.message}`, error.response?.data)
      throw new Error(`${API_NAME} Error: ${error.response?.status} ${error.response?.data?.error}`)
    }
    throw new Error('Unknown Error')
  }
}
