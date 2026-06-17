import type { ComponentPropsWithoutRef } from 'react'
import { useOrderModal } from '../context/OrderModalContext'
import { Button } from './ui/Button'

// Достаём тип пропсов для варианта Button как кнопки (без href)
type ButtonAsButtonProps = ComponentPropsWithoutRef<'button'> &
  Omit<ComponentPropsWithoutRef<typeof Button>, 'href' | 'onClick' | 'type'>

// Наши пропсы: всё, что может принять Button (кроме href), плюс свой onClick
type OrderButtonProps = Omit<ButtonAsButtonProps, 'onClick'> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function OrderButton({ onClick, children, ...props }: OrderButtonProps) {
  const { openOrderModal } = useOrderModal()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    openOrderModal()
  }

  // Теперь TypeScript точно знает, что мы передаём пропсы кнопки, а не ссылки
  return (
    <Button
      {...props}
      onClick={handleClick}
      // Убеждаемся, что href не будет передан (он исключён из типа)
    >
      {children}
    </Button>
  )
}
