import React, { HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  variant?: keyof typeof variants
} & HTMLProps<HTMLButtonElement>

const variants: Record<string, string> = {
  green:
    'bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:ring-green-300',
  red: 'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-300',
  purple:
    'bg-purple-500 hover:bg-purple-600 focus:bg-purple-600 focus:ring-purple-300',
}

export const Button = ({
  variant = 'green',
  children,
  type = 'button',
  className, 
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        'text-white px-2 py-1 text-xs font-medium rounded transition-all outline-none focus:ring-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
