import './fonts/shnobel.css'

import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`  
  ${normalize}

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
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 10px;
  width: fit-content;
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
          <Logo />
        </LogoBox>
      </Link>
    </HeaderElement>
  )
}

const HeaderElement = styled.header``

const LogoBox = styled.div`
  display: flex;
`

const Logo = styled.div`
  background: url('img/logo.svg');
  height: 29px;
  width: 139px;

  @media (max-width: 720px) {
    height: 33px;
    width: 34px;
    background: url('img/logo-small.svg');
  }
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

  @media (max-width: 720px) {
    margin-left: 0;
    margin-top: 10px;
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

  @media (max-width: 720px) {
    width: auto;
    padding-bottom: 10px;
  }

  ::after {
    background: url('/img/clouds.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 100vh;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 500ms;
    width: 100vw;
    z-index: -3;
  }
`
