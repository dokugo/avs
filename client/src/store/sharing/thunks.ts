import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'store/rootReducer'

import { createUser, requestUserError, updateUser } from './actions'
import { Actions } from './actionTypes'
import { client } from './api'
import { User } from './types'

type Thunk = ThunkDispatch<RootState, undefined, Actions>
type State = () => RootState

const requestUser = () => async (
  dispatch: Thunk,
  getState: State
): Promise<void> => {
  try {
    const user = getState().sharing.user

    const id = user?.id || 'undefined'
    const response = await client.get(id)

    dispatch(createUser(response.payload))
  } catch (error) {
    dispatch(requestUserError(error))
  }
}

const requestUserUpdate = (payload: Partial<User>) => async (
  dispatch: Thunk,
  getState: State
): Promise<void> => {
  try {
    const user = getState().sharing.user

    const response = await client.put({ id: user.id, ...payload })

    dispatch(updateUser(response.payload))
  } catch (error) {
    dispatch(requestUserError(error))
  }
}

export { requestUser, requestUserUpdate }
