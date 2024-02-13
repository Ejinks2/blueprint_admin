import apiClient from '../apiClient'

export const getAllUsers = async (): Promise<unknown> => {
  return await apiClient.get('/all')
}

export const getUser = async (id: string): Promise<unknown> => {
  return await apiClient.get(`/${id}`)
}

export const createUser = async (user: unknown): Promise<unknown> => {
  return await apiClient.post('/', JSON.stringify(user))
}

export const updateUser = async (id: string, user: unknown): Promise<unknown> => {
  return await apiClient.put(`/${id}`, JSON.stringify(user))
}

export const deleteUser = async (id: string): Promise<unknown> => {
  return await apiClient.delete(`/${id}`)
}
