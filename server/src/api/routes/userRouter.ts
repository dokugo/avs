import express from 'express'

import { asyncTryCatch } from '../../middlewares'
import { createUser, getUser, updateUser } from '../controllers/userController'
import validator from '../validators/userValidator'

const router = express.Router()

router.get('/user', asyncTryCatch(createUser))
router.get('/user/:id', asyncTryCatch(getUser))
router.put('/user', validator.updateUser, asyncTryCatch(updateUser))

export default router
