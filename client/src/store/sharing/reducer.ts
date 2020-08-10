import ActionTypes, { Actions } from './actionTypes'
import { User } from './types'
import { validateEmail } from './utils'

interface State {
  user: User
  emailText: string
  isEmailValid: boolean
  isEmailSent: boolean
}

const storedUser = JSON.parse(localStorage.getItem('user') || '{}')

const initState: State = {
  user: storedUser,
  emailText: '',
  isEmailValid: false,
  isEmailSent: false,
}

const reducer = (state: State = initState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.CREATE_USER: {
      localStorage.setItem('user', JSON.stringify(action.payload))

      return {
        ...state,
        isEmailSent: action.payload.email ? true : false,
        emailText: action.payload.email || '',
        user: action.payload,
      }
    }

    case ActionTypes.UPDATE_USER: {
      localStorage.setItem('user', JSON.stringify(action.payload))

      return {
        ...state,
        isEmailSent: action.payload.email ? true : false,
        user: action.payload,
      }
    }

    case ActionTypes.REQUEST_USER_ERROR: {
      console.error(action.payload.message)
      return state
    }

    case ActionTypes.CHANGE_EMAIL_TEXT: {
      const isEmailValid = validateEmail(action.payload)

      return {
        ...state,
        emailText: action.payload,
        isEmailValid: isEmailValid || false,
        user: {
          ...state.user,
          email: isEmailValid ? action.payload : null,
        },
      }
    }

    default:
      return state
  }
}

export default reducer
