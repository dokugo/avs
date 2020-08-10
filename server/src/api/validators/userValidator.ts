import { body } from 'express-validator'

const validator = {
  updateUser: [
    body('id').notEmpty(),
    body('shared')
      .optional()
      .isBoolean(),
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail(),
  ],
}

export default validator
