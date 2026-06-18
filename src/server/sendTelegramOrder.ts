import { createServerFn } from '@tanstack/react-start'
import { buildOrderMessage, type OrderPayload } from '../lib/telegram'
import { getTelegramConfig } from './env'

const TELEGRAM_TIMEOUT_MS = 15_000

export const sendTelegramOrder = createServerFn({ method: 'POST' })
  .inputValidator((data: OrderPayload) => data)
  .handler(async ({ data }) => {
    const { token, chatId, apiBase } = getTelegramConfig()

    if (!token || !chatId) {
      throw new Error('Telegram credentials not configured')
    }

    const message = buildOrderMessage(data)

    let response: Response
    try {
      response = await fetch(`${apiBase}/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
        signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
      })
    } catch (error) {
      console.error('Telegram network error:', error)
      throw new Error('Не удалось связаться с Telegram API')
    }

    const result = (await response.json()) as {
      ok: boolean
      description?: string
    }

    if (!response.ok || !result.ok) {
      console.error('Telegram API error:', result)
      throw new Error(result.description ?? 'Failed to send Telegram message')
    }

    return { success: true }
  })
