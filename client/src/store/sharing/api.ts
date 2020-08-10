import { User } from './types'

const host = process.env.REACT_APP_SERVER_HOST || 'http://localhost'
const port = process.env.REACT_APP_SERVER_PORT || '9000'

const API_ROOT = `${host}:${port}/api/user`

interface Response {
  message?: string
  payload: User
}

export const client = {
  get: async (payload: string): Promise<Response> => {
    try {
      const response = await fetch(`${API_ROOT}/${payload}`)

      const data = await response.json()

      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  },

  put: async (payload: Partial<User>): Promise<Response> => {
    try {
      const response = await fetch(`${API_ROOT}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  },
}
