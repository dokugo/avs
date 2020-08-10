import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { requestUserUpdate } from 'store/sharing/thunks'
import styled from 'styled-components/macro'

import Button from './Button'
import Input from './Input'

const FormComponent: FC<StoreProps> = ({
  isEmailValid,
  isEmailSent,
  emailText,
  requestUserUpdate,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    requestUserUpdate({ email: emailText })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input disabled={isEmailSent} text={emailText} />
      <Button active={isEmailValid} disabled={isEmailSent} />
    </Form>
  )
}

const mapState = (
  state: RootState
): {
  isEmailValid: boolean
  isEmailSent: boolean
  emailText: string
} => ({
  isEmailValid: state.sharing.isEmailValid,
  isEmailSent: state.sharing.isEmailSent,
  emailText: state.sharing.emailText,
})

const mapDispatch = { requestUserUpdate }

const connector = connect(mapState, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(FormComponent)

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`
