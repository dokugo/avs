import { DefaultTheme } from 'styled-components/macro'

export type IconColor = keyof DefaultTheme['color']

interface Brand {
  [index: string]: {
    src: string
    color: IconColor
  }
}

export const brand: Brand = {
  vk: {
    src: '/img/vk.svg',
    color: 'vk',
  },
  fb: {
    src: '/img/fb.svg',
    color: 'fb',
  },
  tw: {
    src: '/img/tw.svg',
    color: 'tw',
  },
  ok: {
    src: '/img/ok.svg',
    color: 'ok',
  },
  like: {
    src: '/img/like.svg',
    color: 'darkpink',
  },
}

export const shareContent = `https://aviasales.ru — поиск и сравнение цен на авиабилеты, предлагаемые различными авиакомпаниями, агентствами и системами бронирования. Действующие спецпредложения.`
