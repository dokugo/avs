import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { Box as Container } from '../common'

interface Props {
  active: boolean
  disabled: boolean
}

const ButtonComponent: FC<Props> = ({ active, disabled }) => {
  return (
    <Container>
      <Button active={active} disabled={disabled}>
        Отправить
      </Button>
    </Container>
  )
}

export default ButtonComponent

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

  :focus {
    background: ${({ active, theme }): string =>
      active ? theme.color.darkpink : 'none'};
    border: 2px solid
      ${({ active, theme }): string =>
        active ? theme.color.darkpink : theme.color.white};
    color: ${({ theme }): string => theme.color.white};
  }

  @media (max-width: 720px) {
    width: 260px;
    height: 50px;
    font-size: 30px;
  }
`
