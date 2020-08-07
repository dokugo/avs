import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { requestUserUpdate } from 'store/sharing/thunks'
import styled from 'styled-components/macro'

const ButtonComponent: FC<StoreProps> = ({
  isEmailValid,
  isEmailSent,
  emailText,
  requestUserUpdate,
}) => {
  const handeClick = (): void => {
    requestUserUpdate({ email: emailText })
  }

  return (
    <Container>
      <Button
        active={isEmailValid}
        disabled={isEmailSent}
        onSubmit={handeClick}
        onClick={handeClick}
      >
        Отправить
      </Button>
    </Container>
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
export default connector(ButtonComponent)

// Styles

const Container = styled.section`
  margin: 0 auto;
`

const Button = styled.button<{ active: boolean; disabled: boolean }>`
  background: ${({ active, theme }): string =>
    active ? theme.color.white : 'none'};
  border: 2px solid ${({ theme }): string => theme.color.white};
  border-radius: 50px;
  color: ${({ active, theme }): string =>
    active ? theme.color.darkpink : theme.color.white};
  cursor: ${({ active }): string => (active ? 'pointer' : 'auto')};
  display: ${({ disabled }): string => (disabled ? 'none' : 'block')};
  font-family: 'Shnobel';
  font-size: 40px;
  height: 70px;
  outline: none;
  padding: 10px;
  pointer-events: ${({ active }): string => (active ? 'auto' : 'none')};
  transition: 300ms;
  user-select: none;
  width: 230px;

  :hover {
    background: ${({ active, theme }): string =>
      active ? theme.color.darkpink : 'none'};
    border: 2px solid
      ${({ active, theme }): string =>
        active ? theme.color.darkpink : theme.color.white};
    color: ${({ theme }): string => theme.color.white};
  }
`
