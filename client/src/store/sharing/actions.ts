import ActionTypes, { Actions } from './actionTypes'
import { User } from './types'

export const createUser = (user: User): Actions => {
  return { type: ActionTypes.CREATE_USER, payload: user }
}

export const updateUser = (user: User): Actions => {
  return { type: ActionTypes.UPDATE_USER, payload: user }
}

export const requestUserError = (payload: Error): Actions => {
  return { type: ActionTypes.REQUEST_USER_ERROR, payload: payload }
}

export const changeEmailText = (text: string): Actions => {
  return { type: ActionTypes.CHANGE_EMAIL_TEXT, payload: text }
}
