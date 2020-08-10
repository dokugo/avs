import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { requestUser } from 'store/sharing/thunks'
import { User } from 'store/sharing/types'
import styled from 'styled-components/macro'

import { Box } from './common'
import Form from './Form'
import Share from './Share'

const Promo: FC<StoreProps> = ({ user, requestUser, isEmailSent }) => {
  useEffect(() => {
    requestUser()
  }, [requestUser])

  const showFinalScreen = user?.shared && !!user.email?.length && isEmailSent

  return (
    <Container final={showFinalScreen}>
      <Content final={showFinalScreen}>
        <TitleBox>
          <Title>Чтобы выиграть путешествие</Title>
        </TitleBox>
        <Box>
          <Share />
        </Box>
        <Box>
          <Form />
        </Box>
      </Content>
    </Container>
  )
}

const mapState = (
  state: RootState
): {
  user: User
  isEmailSent: boolean
} => ({
  user: state.sharing.user,
  isEmailSent: state.sharing.isEmailSent,
})

const mapDispatch = { requestUser }

const connector = connect(mapState, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(Promo)

const Container = styled.section<{ final: boolean }>`
  margin: 0 auto;

  ::after {
    background: ${({ theme }): string => theme.color.mediumpink};
    bottom: 0;
    content: '';
    display: block;
    height: 100px;
    left: 0;
    position: absolute;
    width: 100vw;
    z-index: -2;
    transition: opacity 500ms;
    opacity: ${({ final }): string => (final ? '1' : '0')};

    @media (max-width: 720px) {
      height: 75%;
    }
  }

  ::before {
    background: url('/img/man.svg');
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 99vh;
    left: 0;
    margin: 0 auto;
    opacity: ${({ final }): string => (final ? '1' : '0')};
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 500ms;
    width: 99vw;
    z-index: -1;
  }
`

const Content = styled.div<{ final: boolean }>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  opacity: ${({ final }): string => (final ? '0' : '1')};
  padding: 50px 90px;
  transition: opacity 500ms;
  width: 520px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 0;
  }
`

const TitleBox = styled(Box)`
  @media (max-width: 720px) {
    margin-top: 25px;
  }
`

const Title = styled.h2`
  color: ${({ theme }): string => theme.color.white};
  font-family: 'Shnobel';
  font-size: 50px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 26px;
  }
`
