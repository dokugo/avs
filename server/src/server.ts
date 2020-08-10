console.clear()

import cors from 'cors'
import express, { json } from 'express'
import helmet from 'helmet'

import router from './api/router'
import { SERVER_PORT } from './config'
import { errHandler, notFoundHandler } from './middlewares'

const app = express()

app.use(helmet())
app.use(cors())
app.use(json())
app.use(router)
app.use(errHandler)
app.use(notFoundHandler)

const start = (): void => {
  app.listen(SERVER_PORT)
  console.log(`Backend is listening on port ${SERVER_PORT}`)
}

start()
