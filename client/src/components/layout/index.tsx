import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`  
  ${normalize}

  @font-face {
    font-family: 'Shnobel';
    src: 
      url('/fonts/Shnobel-Regular.woff') format('woff2'),
      url('/fonts/Shnobel-Regular.woff') format('woff'),
      url('/fonts/Shnobel-Regular.otf') format('otf'),
      url('/fonts/Shnobel-Regular.ttf') format('ttf'),
  }

  html {
    font-size: 16px;
  }

  body {
    background: ${({ theme }): string => theme.color.pink};
    font-family: 'Open Sans', 'Roboto', 'Segoe UI', 'Verdana', 'Calibri', 'Trebuchet MS', sans-serif;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Header: FC = () => {
  return (
    <HeaderElement>
      <Link
        href="https://aviasales.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoBox>
          <Logo src="static/logo.svg" height="29" width="139" />
        </LogoBox>
      </Link>
    </HeaderElement>
  )
}

const HeaderElement = styled.header``

const LogoBox = styled.div`
  display: flex;
`

const Logo = styled.img`
  height: fit-content;
  max-width: 139px;
`

const Link = styled.a`
  display: block;
  margin-left: 30px;
  margin-top: 30px;
  width: fit-content;

  :focus {
    border-radius: 3px;
    box-shadow: 0 0 0 2px ${({ theme }): string => theme.color.darkpink};
    outline: none;
  }
`

export const Main = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 60px;
  width: 980px;

  @media (max-width: 980px) {
    width: 720px;
  }
`
