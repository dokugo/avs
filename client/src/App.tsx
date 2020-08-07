import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'

import { Promo } from './components'
import { Container, GlobalStyle, Header, Main } from './components/layout'

const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>
        <Promo />
      </Main>
    </Container>
  )
}

export default hot(App)
