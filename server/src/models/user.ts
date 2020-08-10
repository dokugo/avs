import { nanoid } from 'nanoid/async'

import db from '../db'

interface User {
  id: string
  shared: boolean
  email: string
}

const user = {
  get: async (id: string): Promise<User> => {
    const query = `
      SELECT id, shared, email
      FROM users
      WHERE id = $1
    `
    const result = await db.query(query, [id])
    const user = result.rows[0]
    return user
  },

  create: async (): Promise<User> => {
    const query = `
      INSERT INTO users (id, shared, email)
      VALUES ($1, false, null)
      RETURNING *
    `
    const id = await nanoid()

    const result = await db.query(query, [id])
    const user = result.rows[0]
    return user
  },

  update: async (set: string, params: string[]): Promise<User> => {
    const query = `
      UPDATE users
      SET ${set} = $2
      WHERE id = $1
      RETURNING *
    `
    const result = await db.query(query, params)
    const user = result.rows[0]
    return user
  },
}

export default user
