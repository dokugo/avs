import dotenv from 'dotenv'

dotenv.config()

export const pg = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'aviasales',
}

export const SERVER_PORT = process.env.SERVER_PORT || 9000
