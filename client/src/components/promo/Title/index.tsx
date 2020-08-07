import React, { FC } from 'react'
import styled from 'styled-components/macro'

const TitleComponent: FC = () => {
  return (
    <Container>
      <Title>Чтобы выиграть путешествие</Title>
    </Container>
  )
}

export default TitleComponent

const Container = styled.section``

const Title = styled.h2`
  color: ${({ theme }): string => theme.color.white};
  font-family: 'Shnobel';
  font-size: 50px;
  font-style: normal;
  font-weight: normal;
  line-height: 52px;
  margin: 0;
  text-align: center;
`
