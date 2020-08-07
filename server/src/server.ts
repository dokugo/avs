import express, { json } from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import db from './db'
import { body, validationResult } from 'express-validator'

const app = express()

console.clear()

app.set('trust proxy', 1)

app.use(cors())
app.use(json())

app.get('/api/user/:id', async (req: Request, res: Response) => {
  try {
    console.log(req.params)

    if (req.params.id === 'undefined') {
      const query = `
        INSERT INTO users (shared, email)
        VALUES (false, null)
        RETURNING *
      `

      const result = await db.query(query)

      console.log(result)

      const user = result.rows[0]

      return res.send({ payload: user })
    } else {
      const query = `
        SELECT id, shared, email
        FROM users
        WHERE id = $1
      `
      const params = [req.params.id]

      const result = await db.query(query, params)

      console.log(result)

      const user = result.rows[0]

      return res.send({ payload: user })
    }
  } catch (error) {
    console.warn(error)
    return res.status(400).send({ message: error.message })
  }
})

app.put(
  '/api/user',
  [
    body('id').notEmpty(),
    body('shared')
      .optional()
      .isBoolean(),
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail(),
  ],
  async (req: Request, res: Response) => {
    try {
      console.log(req)
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(422).json({ message: 'Invalid data' })
        // return res.status(422).json({ errors: errors.array() })
      }

      const set = req.body.email ? 'email' : req.body.shared ? 'shared' : ''
      const par = req.body.email || req.body.shared

      const query = `
      UPDATE users
      SET ${set} = $2
      WHERE id = $1
      RETURNING *
    `

      const params = [req.body.id, par]

      const result = await db.query(query, params)
      console.log(result)

      const user = {
        id: result.rows[0].id,
        shared: result.rows[0].shared,
        email: result.rows[0].email,
      }

      return res.send({ payload: user })
    } catch (error) {
      console.warn(error)
      return res.status(400).send({ message: error.message })
    }
  }
)

console.log('Listening on 9000')
app.listen(9000)
