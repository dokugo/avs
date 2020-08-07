import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
  FacebookShareButton,
  OKShareButton,
  TwitterShareButton,
  VKShareButton,
} from 'react-share'
import { RootState } from 'store/rootReducer'
import { requestUserUpdate } from 'store/sharing/thunks'
import styled, { css, DefaultTheme } from 'styled-components/macro'

const img = {
  vk: '/static/vk.svg',
  fb: '/static/fb.svg',
  tw: '/static/tw.svg',
  ok: '/static/ok.svg',
}

const ShareComponent: FC<StoreProps> = ({ shared, requestUserUpdate }) => {
  const shareUrl = 'https://example.com'

  const stepCounter = shared ? <CheckedBox /> : <Number>1.</Number>

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    if (shared) return
  }

  const handleSharing = (): void => {
    requestUserUpdate({ shared: true })
  }

  return (
    <Container>
      {stepCounter}
      <Content shared={shared}>
        <ShareText>Поделись с друзьями:</ShareText>
        <ShareButtons>
          <ShareButton>
            <VK
              disabled={shared}
              disabledStyle={{ pointerEvents: 'none' }}
              tabIndex={0}
              url={shareUrl}
              onClick={handleClick}
              onShareWindowClose={handleSharing}
            >
              <BrandIcon color={'vk'}>
                <img src={img.vk} alt="Поделиться в соцсети" />
              </BrandIcon>
              <LikeIcon color={'vk'}>
                <img src="/static/like.svg" alt="Like" />
              </LikeIcon>
            </VK>
          </ShareButton>
          <ShareButton>
            <FB
              disabled={shared}
              disabledStyle={{ pointerEvents: 'none' }}
              tabIndex={0}
              url={shareUrl}
              onClick={handleClick}
              onShareWindowClose={handleSharing}
            >
              <BrandIcon color={'fb'}>
                <img src={img.fb} alt="Поделиться в соцсети" />
              </BrandIcon>
              <LikeIcon color={'fb'}>
                <img src="/static/like.svg" alt="Like" />
              </LikeIcon>
            </FB>
          </ShareButton>
          <ShareButton>
            <TW
              disabled={shared}
              disabledStyle={{ pointerEvents: 'none' }}
              tabIndex={0}
              url={shareUrl}
              onClick={handleClick}
              onShareWindowClose={handleSharing}
            >
              <BrandIcon color={'tw'}>
                <img src={img.tw} alt="Поделиться в соцсети" />
              </BrandIcon>
              <LikeIcon color={'tw'}>
                <img src="/static/like.svg" alt="Like" />
              </LikeIcon>
            </TW>
          </ShareButton>
          <ShareButton>
            <OK
              disabled={shared}
              disabledStyle={{ pointerEvents: 'none' }}
              tabIndex={0}
              url={shareUrl}
              onClick={handleClick}
              onShareWindowClose={handleSharing}
            >
              <BrandIcon color={'ok'}>
                <img src={img.ok} alt="Поделиться в соцсети" />
              </BrandIcon>
              <LikeIcon color={'ok'}>
                <img src="/static/like.svg" alt="Like" />
              </LikeIcon>
            </OK>
          </ShareButton>
        </ShareButtons>
      </Content>
    </Container>
  )
}

const mapState = (state: RootState): { shared: boolean } => ({
  shared: state.sharing.user.shared,
})

const mapDispatch = { requestUserUpdate }

const connector = connect(mapState, mapDispatch)
type StoreProps = ConnectedProps<typeof connector>
export default connector(ShareComponent)

// Styles

const Container = styled.section`
  position: relative;
`

const Content = styled.div<{ shared: boolean }>`
  opacity: ${({ shared }): string => (shared ? '.5' : '1')};
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
  background-color: ${({ theme }): string => theme.color.darkpink};
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

const ShareText = styled.span`
  color: ${({ theme }): string => theme.color.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
`
const ShareButtons = styled.div`
  display: flex;
  margin-top: 14px;
`

const ShareButton = styled.div`
  display: flex;
  height: 53px;
  margin-right: 29px;
  width: 53px;

  :last-of-type {
    margin-right: 0;
  }

  button {
    outline: none;
  }
`

const LikeIcon = styled.div<{ color: keyof DefaultTheme['color'] }>`
  align-items: center;
  background-color: ${({ color, theme }): string => theme.color[color]};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  content: '';
  display: flex;
  height: 53px;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms;
  width: 53px;
`

const BrandIcon = styled.div<{ color: string }>`
  background-color: ${({ color }): string => color};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  content: '';
  display: block;
  height: 53px;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms;
  width: 53px;
`

const CommonShareButtonStyles = css`
  position: relative;

  :hover ${LikeIcon}, :focus ${LikeIcon} {
    opacity: 1;
  }

  :hover div ${BrandIcon}, :focus div ${BrandIcon} {
    opacity: 0;
  }
`

const VK = styled(VKShareButton)`
  ${CommonShareButtonStyles}
`

const FB = styled(FacebookShareButton)`
  ${CommonShareButtonStyles}
`

const TW = styled(TwitterShareButton)`
  ${CommonShareButtonStyles}
`

const OK = styled(OKShareButton)`
  ${CommonShareButtonStyles}
`
