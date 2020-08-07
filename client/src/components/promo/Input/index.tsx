import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { changeEmailText } from 'store/sharing/actions'
import styled from 'styled-components/macro'

const InputComponent: FC<StoreProps> = ({
  emailText,
  changeEmailText,
  isEmailSent,
}) => {
  const stepCounter = isEmailSent ? <CheckedBox /> : <Number>2.</Number>

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (isEmailSent) return
    changeEmailText(event.target.value)
  }

  return (
    <Container>
      {stepCounter}
      <Content disabled={isEmailSent}>
        <InputLabel htmlFor={'email'}>Оставь почту:</InputLabel>
        <Input
          id={'email'}
          value={emailText}
          onChange={handleChange}
          disabled={isEmailSent}
        />
      </Content>
    </Container>
  )
}

const mapState = (
  state: RootState
): {
  emailText: string
  isEmailSent: boolean
} => ({
  emailText: state.sharing.emailText,
  isEmailSent: state.sharing.isEmailSent,
})

const mapDispatch = { changeEmailText }

const connector = connect(mapState, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(InputComponent)

// Styles

const Container = styled.section`
  position: relative;
`

const Content = styled.div<{ disabled: boolean }>`
  opacity: ${({ disabled }): string => (disabled ? '.5' : '1')};
`

const Number = styled.span`
  color: ${({ theme }): string => theme.color.white};
  font-family: 'Shnobel';
  font-size: 44px;
  font-style: normal;
  font-weight: normal;
  left: -50px;
  line-height: 46px;
  position: absolute;
  text-align: center;
  top: 0;
`

const CheckedBox = styled.div`
  background: ${({ theme }): string => theme.color.darkpink};
  height: 20px;
  left: -30px;
  line-height: 46px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 20px;

  ::after {
    border: 2px solid ${({ theme }): string => theme.color.white};
    border-left: 0;
    border-top: 0;
    content: '';
    display: table;
    height: 9px;
    left: 25%;
    position: absolute;
    top: 50%;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    width: 6px;
  }
`

const InputLabel = styled.label`
  color: ${({ theme }): string => theme.color.white};
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
`

const Input = styled.input`
  background: ${({ theme }): string => theme.color.white};
  border: none;
  border-radius: 25px;
  box-sizing: border-box;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  height: 50px;
  line-height: 50px;
  margin-top: 15px;
  outline: none;
  padding: 0 30px;
  width: 100%;
`
