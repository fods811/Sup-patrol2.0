import { createServerFn } from '@tanstack/react-start'
import type { OrderPayload } from '../lib/telegram'

const TELEGRAM_PROXY_URL = 'https://telegram-script-nine.vercel.app/api/patrol'
const TELEGRAM_TIMEOUT_MS = 15_000

export const sendTelegramOrder = createServerFn({ method: 'POST' })
  .inputValidator((data: OrderPayload) => data)
  .handler(async ({ data }) => {
    let response: Response
    try {
      response = await fetch(TELEGRAM_PROXY_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Origin': 'https://sup-patrol.ru'
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          tourTitle: data.tourTitle,
          tourPrice: data.tourPrice,
          date: data.date,
          details: data.details,
        }),
        signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
      })
    } catch (error) {
      console.error('Telegram proxy network error:', error)
      throw new Error('Не удалось связаться с сервером отправки заявок')
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      console.error('Telegram proxy error:', error)
      throw new Error(error.error || 'Failed to send order')
    }

    return { success: true }
  })