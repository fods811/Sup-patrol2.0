const VERCEL_API_URL = 'https://telegram-script-nine.vercel.app/api/patrol'
export interface OrderPayload {
  name: string
  phone: string
  details?: string
  date?: string
  tourTitle?: string
  tourPrice?: string
}

export function buildOrderMessage({
  name,
  phone,
  details,
  date,
  tourTitle,
  tourPrice,
}: OrderPayload): string {
  const lines = ['🛶 НОВАЯ ЗАЯВКА!', '']

  if (tourTitle) {
    lines.push(`🏄 Тур: ${tourTitle}`)
    if (tourPrice) lines.push(`💰 Цена: ${tourPrice} руб.`)
    lines.push('')
  }

  lines.push(`👤 Имя: ${name}`)
  lines.push(`📞 Телефон: ${phone}`)

  if (date) {
    lines.push(`📅 Дата: ${date}`)
  }

  lines.push(`📝 Доп. информация: ${details || 'не указана'}`)

  return lines.join('\n')
}

export async function submitTelegramOrder(payload: OrderPayload): Promise<void> {
  const response = await fetch(VERCEL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to send order')
  }
}
