import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { requestUser } from 'store/sharing/thunks'
import styled from 'styled-components/macro'

import Button from './Button'
import Input from './Input'
import Share from './Share'
import Title from './Title'

const Promo: FC<StoreProps> = ({ requestUser }) => {
  useEffect(() => {
    requestUser()
  }, [requestUser])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Content>
          <TitleBox>
            <Title />
          </TitleBox>
          <ShareBox>
            <Share />
          </ShareBox>
          <InputBox>
            <Input />
          </InputBox>
          <ButtonBox>
            <Button />
          </ButtonBox>
        </Content>
      </Form>
    </Container>
  )
}

const mapDispatch = { requestUser }

const connector = connect(null, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(Promo)

// Styles

const Container = styled.section`
  margin: 0 auto;
`

const Form = styled.form``

const Content = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 50px 90px;
  width: 520px;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 300px;
`

const TitleBox = styled(Box)``

const ShareBox = styled(Box)``

const InputBox = styled(Box)``

const ButtonBox = styled(Box)``
