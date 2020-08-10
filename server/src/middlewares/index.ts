import {
  NextFunction as Next,
  Request as Req,
  RequestHandler as Handler,
  Response as Res,
} from 'express'

export const errHandler = (err: Error, _r: Req, res: Res, _n: Next): Res => {
  console.error(err.message)
  return res.status(500).send({ message: 'Internal server error.' })
}

export const asyncTryCatch = (
  fn: (req: Req, res: Res, next: Next) => Promise<Res>
): Handler => (req: Req, res: Res, next: Next): Promise<Res | void> => {
  return fn(req, res, next).catch(err => next(err))
}

export const notFoundHandler = (_r: Req, res: Res): Res => {
  return res.status(404).send({ message: 'Resource not found.' })
}
