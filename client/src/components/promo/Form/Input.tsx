import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { changeEmailText } from 'store/sharing/actions'
import styled from 'styled-components/macro'

import { CheckedBox, Container, Label, Number, Title } from '../common'

interface OwnProps {
  text: string
  disabled: boolean
}

type Props = OwnProps & StoreProps

const InputComponent: FC<Props> = ({ text, changeEmailText, disabled }) => {
  const stepCounter = disabled ? <CheckedBox /> : <Number>2.</Number>

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeEmailText(event.target.value)
  }

  return (
    <Container>
      <Title>
        {stepCounter}
        <Label disabled={disabled} htmlFor={'email'}>
          Оставь почту:
        </Label>
      </Title>
      <InputBox disabled={disabled}>
        <Input
          id={'email'}
          value={text}
          onChange={handleChange}
          disabled={disabled}
        />
      </InputBox>
    </Container>
  )
}

const mapDispatch = { changeEmailText }

const connector = connect(null, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(InputComponent)

const InputBox = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  opacity: ${({ disabled }): string => (disabled ? '.5' : '1')};
  transition: opacity 300ms;
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
  outline: none;
  padding: 0 30px;
  width: 100%;
`
