import { sendTelegramOrder } from '../server/sendTelegramOrder'

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
  await sendTelegramOrder({ data: payload })
}
