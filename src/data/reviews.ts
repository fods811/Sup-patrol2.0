import { PLACEHOLDER_REVIEW } from '../constants/images'

export interface ReviewScreenshot {
  id: number
  img: string
  source: 'Instagram' | 'VK' | 'Telegram'
  link: string
}

export const REVIEW_SCREENSHOTS: ReviewScreenshot[] = [
  { id: 1, img: PLACEHOLDER_REVIEW, source: 'Instagram', link: 'https://instagram.com/suppatrol' },
  { id: 2, img: PLACEHOLDER_REVIEW, source: 'VK', link: 'https://vk.com/suppatrol' },
  { id: 3, img: PLACEHOLDER_REVIEW, source: 'Telegram', link: 'https://t.me/snow_express' },
  { id: 4, img: PLACEHOLDER_REVIEW, source: 'Instagram', link: 'https://instagram.com/suppatrol' },
  { id: 5, img: PLACEHOLDER_REVIEW, source: 'VK', link: 'https://vk.com/suppatrol' },
]

export const SOURCE_ICONS: Record<ReviewScreenshot['source'], string> = {
  Instagram: '📸',
  VK: '📘',
  Telegram: '✈️',
}
