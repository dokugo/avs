import { Request as Req, Response as Res } from 'express'
import { validationResult } from 'express-validator'

import { isBool } from '../../helpers/utils'
import User from '../../models/user'
import dictionary from '../dictionary/userResponses'

// create new user

export const createUser = async (_req: Req, res: Res): Promise<Res> => {
  const user = await User.create()
  return res.send({ payload: user })
}

// get existing user by id

export const getUser = async (req: Req, res: Res): Promise<Res> => {
  const user = await User.get(req.params.id)

  if (!user) {
    return res.status(404).send({ message: dictionary.notFound })
  }

  return res.send({ payload: user })
}

// update user `shared` or `email` field

export const updateUser = async (req: Req, res: Res): Promise<Res> => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: dictionary.invalidData })
  }

  if (req.body?.email?.length && isBool(req.body?.shared)) {
    return res.status(400).send({ message: dictionary.oneAtATime })
  }

  const set = req.body.email ? 'email' : req.body.shared ? 'shared' : ''
  const param = req.body.email || req.body.shared

  if (req.body.shared === false) {
    return res.status(400).json({ message: dictionary.invalidData })
  }

  if (!set.length) {
    return res.status(400).send({ message: dictionary.missingData })
  }

  const user = await User.update(set, [req.body.id, param])

  if (!user) {
    return res.status(404).send({ message: dictionary.notFound })
  }

  return res.send({ payload: user })
}
