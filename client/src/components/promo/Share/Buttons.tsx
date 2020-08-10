import React, { CSSProperties, FC } from 'react'
import {
  FacebookShareButton as FB,
  OKShareButton as OK,
  TwitterShareButton as TW,
  VKShareButton as VK,
} from 'react-share'
import styled from 'styled-components/macro'

import { brand, IconColor, shareContent } from './constants'

interface Props {
  disabled: boolean
  handleSharing: () => Promise<void>
}

const ButtonsComponent: FC<Props> = ({ disabled, handleSharing }) => {
  const tabIndex = disabled ? -1 : 0

  const brandButtonStyle = {
    disabled: { pointerEvents: 'none' } as CSSProperties,
    default: { position: 'relative' } as CSSProperties,
  }

  const brandButtonProps = {
    url: shareContent,
    tabIndex: tabIndex,
    disabled: disabled,
    disabledStyle: brandButtonStyle.disabled,
    style: brandButtonStyle.default,
    onShareWindowClose: handleSharing,
  }

  return (
    <Container disabled={disabled}>
      <Button>
        <VK {...brandButtonProps}>
          <BrandIcon color={brand.vk.color} src={brand.vk.src} />
        </VK>
      </Button>
      <Button>
        <FB {...brandButtonProps}>
          <BrandIcon color={brand.fb.color} src={brand.fb.src} />
        </FB>
      </Button>
      <Button>
        <TW {...brandButtonProps}>
          <BrandIcon color={brand.tw.color} src={brand.tw.src} />
        </TW>
      </Button>
      <Button>
        <OK {...brandButtonProps}>
          <BrandIcon color={brand.ok.color} src={brand.ok.src} />
        </OK>
      </Button>
    </Container>
  )
}

export default ButtonsComponent

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  margin-top: 15px;
  opacity: ${({ disabled }): string => (disabled ? '.5' : '1')};
  transition: opacity 300ms;
`

const Button = styled.div`
  display: flex;
  height: 53px;
  margin-right: 29px;
  width: 53px;

  @media (max-width: 720px) {
    margin-right: 14px;
  }

  :last-of-type {
    margin-right: 0;
  }

  button {
    outline: none;
  }
`

const BrandIcon = styled.div<{ color: IconColor; src: string }>`
  ::before,
  ::after {
    background-color: ${({ color, theme }): string => theme.color[color]};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    content: '';
    height: 53px;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: 300ms;
    width: 53px;
  }

  ::before {
    background-image: url(${({ src }): string => src});
    opacity: 1;
  }

  ::after {
    background-image: url(${brand.like.src});
    opacity: 0;
    transform: scale(1.075);
  }

  :hover ::before {
    opacity: 0;
  }

  :hover ::after {
    opacity: 1;
  }
`
