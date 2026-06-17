const TELEGRAM_USERNAME = 'snow_express'

export interface OrderPayload {
  name: string
  phone: string
  details: string
  tourTitle?: string
  tourPrice?: string
}

export function buildOrderMessage({ name, phone, details, tourTitle, tourPrice }: OrderPayload): string {
  const lines = ['🛶 НОВАЯ ЗАЯВКА!', '']

  if (tourTitle) {
    lines.push(`🏄 Тур: ${tourTitle}`)
    if (tourPrice) lines.push(`💰 Цена: ${tourPrice} руб.`)
    lines.push('')
  }

  lines.push(`👤 Имя: ${name}`)
  lines.push(`📞 Телефон: ${phone}`)
  lines.push(`📝 Доп. информация: ${details || 'не указана'}`)

  return lines.join('\n')
}

export function openTelegramOrder(payload: OrderPayload) {
  const message = buildOrderMessage(payload)
  const telegramLink = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`
  window.open(telegramLink, '_blank')
}
