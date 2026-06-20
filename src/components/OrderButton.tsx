import type { ComponentPropsWithoutRef } from 'react'
import { useOrderModal } from '../context/OrderModalContext'
import { Button } from './ui/Button'


type ButtonAsButtonProps = ComponentPropsWithoutRef<'button'> &
  Omit<ComponentPropsWithoutRef<typeof Button>, 'href' | 'onClick' | 'type'>


type OrderButtonProps = Omit<ButtonAsButtonProps, 'onClick'> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function OrderButton({ onClick, children, ...props }: OrderButtonProps) {
  const { openOrderModal } = useOrderModal()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    openOrderModal()
  }


  return (
    <Button
      {...props}
      onClick={handleClick}

    >
      {children}
    </Button>
  )
}
