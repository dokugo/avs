import { GlobalStyle } from 'components/layout'
import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello world</div>
    </>
  )
}

export default hot(App)
