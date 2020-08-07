import React, { FC /* useMemo */ } from 'react'
import {
  /*   FacebookShareButton,
  OKShareButton,
  TwitterShareButton, */
  VKShareButton,
} from 'react-share'
import styled /* , { css } */ from 'styled-components/macro'

interface Props {
  disabled: boolean
  onClick: () => void
}

const IconComponent: FC<Props> = ({ disabled, onClick }) => {
  // const imgUrl = useMemo(() => requi'./icons/vk.svg'), []);

  const shareUrl = 'https://example.com'

  const icons = {
    vk: '/static/vk.svg',
    fb: '/static/fb.svg',
    tw: '/static/tw.svg',
    ok: '/static/ok.svg',
  }

  const color = {
    vk: '#45668E',
    fb: '#3B5998',
    tw: '#00ACED',
    ok: '#EB722E',
  }

  return (
    <VK
      disabled={disabled}
      disabledStyle={{ pointerEvents: 'none' }}
      tabIndex={0}
      url={shareUrl}
      // onClick={onClick}
      onShareWindowClose={onClick}
    >
      <Icon url={icons.vk} color={color.vk} />
    </VK>
  )
}

export default IconComponent

const Icon = styled.div<{ url: string; color: string }>`
  background: ${({ color }): string => color};
  border-radius: 50%;
  height: 53px;
  position: relative;
  width: 53px;

  ::before {
    background: url(${({ url }): string => url});
    content: '';
    display: block;
    height: 53px;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: opacity 300ms;
    width: 53px;
  }

  ::after {
    background: url('/static/like.svg');
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 53px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 300ms;
    width: 53px;
  }

  :hover ::before,
  :focus ::before {
    opacity: 0;
  }

  :hover ::after,
  :focus ::after {
    opacity: 1;
  }
`

/* const CommonShareButtonStyles = css`
  :hover div ::before,
  :focus div ::before {
    opacity: 0;
  }

  :hover div ::after,
  :focus div ::after {
    opacity: 1;
  }
` */

const VK = styled(VKShareButton)<{ disabled: boolean }>`
  :hover div ::before,
  :focus div ::before {
    opacity: 0;
  }

  :hover div ::after,
  :focus div ::after {
    opacity: 1;
  }
`

/* const FB = styled(FacebookShareButton)<{ disabled: boolean }>`
  :hover div ::before,
  :focus div ::before {
    opacity: 0;
  }

  :hover div ::after,
  :focus div ::after {
    opacity: 1;
  }
`

const TW = styled(TwitterShareButton)<{ disabled: boolean }>`
  :hover div ::before,
  :focus div ::before {
    opacity: 0;
  }

  :hover div ::after,
  :focus div ::after {
    opacity: 1;
  }
`

const OK = styled(OKShareButton)<{ disabled: boolean }>`
  :hover div ::before,
  :focus div ::before {
    opacity: 0;
  }

  :hover div ::after,
  :focus div ::after {
    opacity: 1;
  }
`
 */
