import { User } from './types'

enum ActionTypes {
  CREATE_USER = 'CREATE_USER',
  UPDATE_USER = 'UPDATE_USER',
  REQUEST_USER_ERROR = 'REQUEST_USER_ERROR',
  CHANGE_EMAIL_TEXT = 'CHANGE_EMAIL_TEXT',
}

type createUser = {
  type: typeof ActionTypes.CREATE_USER
  payload: User
}

type updateUser = {
  type: typeof ActionTypes.UPDATE_USER
  payload: User
}

type requestUserError = {
  type: typeof ActionTypes.REQUEST_USER_ERROR
  payload: string
}

type changeEmailText = {
  type: typeof ActionTypes.CHANGE_EMAIL_TEXT
  payload: string
}

export default ActionTypes

export type Actions =
  | createUser
  | updateUser
  | requestUserError
  | changeEmailText
