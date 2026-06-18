import { loadEnv } from 'vite'

let cachedEnv: Record<string, string> | null = null

function readEnvFile(): Record<string, string> {
  if (cachedEnv) return cachedEnv

  const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
  cachedEnv = loadEnv(mode, process.cwd(), '')
  return cachedEnv
}

export function getTelegramConfig() {
  const fileEnv = readEnvFile()

  const token = process.env.TELEGRAM_BOT_TOKEN ?? fileEnv.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID ?? fileEnv.TELEGRAM_CHAT_ID
  const apiBase =
    process.env.TELEGRAM_API_BASE ?? fileEnv.TELEGRAM_API_BASE ?? 'https://api.telegram.org'

  return { token, chatId, apiBase }
}
