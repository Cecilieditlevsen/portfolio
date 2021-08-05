import React from 'react'
import clsx from 'clsx'
import { Button } from './Button'

type Props = {
  title: string
  onDelete: () => void
  onToggle: () => void
  isCompleted?: boolean
}

export const ListItem = ({
  title,
  onToggle,
  onDelete,
  isCompleted = false,
}: Props) => {
  return (
    <li className="flex flex-col md:flex-row space-y-4 md:space-y-0 border px-4 py-4 md:py-2 justify-between md:items-center">
      <span
        className={clsx('text-lg leading-tight font-medium', {
          'line-through': isCompleted,
        })}
      >
        {title}
      </span>

      <div className="flex-shrink-0 md:ml-8 space-x-2">
        <Button onClick={onToggle}>
          {isCompleted ? 'Incomplete' : 'Complete'}
        </Button>

        <Button onClick={onDelete} variant="red">
          Delete
        </Button>
      </div>
    </li>
  )
}
