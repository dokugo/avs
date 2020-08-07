import { User } from './types'

export const API_ROOT = 'http://localhost:9000/api/user'

interface Response {
  message?: string
  payload: User
}

export const ApiClient = {
  get: async (payload: string): Promise<Response> => {
    const response = await fetch(`${API_ROOT}/${payload}`)

    const data = await response.json()

    if (!response.ok) throw new Error(data.message)
    return data
  },

  put: async (payload: Partial<User>): Promise<Response> => {
    const response = await fetch(`${API_ROOT}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message)
    return data
  },
}
