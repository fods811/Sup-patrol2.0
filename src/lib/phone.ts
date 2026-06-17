export function formatPhoneInput(value: string): string {
  let digits = value.replace(/\D/g, '')
  if (digits.length > 11) digits = digits.slice(0, 11)

  let formatted = ''
  if (digits.length > 0) formatted = '+7'
  if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`
  if (digits.length > 4) formatted += `) ${digits.slice(4, 7)}`
  if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`
  if (digits.length > 9) formatted += `-${digits.slice(9, 11)}`
  return formatted
}

export function validatePhone(phone: string): string | null {
  const cleanPhone = phone.replace(/\D/g, '')
  if (cleanPhone.length < 10) {
    return 'Введите корректный номер телефона (не менее 10 цифр)'
  }
  return null
}
