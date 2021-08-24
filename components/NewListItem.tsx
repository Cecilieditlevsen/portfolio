import React, { ChangeEvent } from 'react'
import { ListItem } from '../pages/shopping-list'

type Props = ListItem & {
  handleToggle: (
    id: ListItem['id'],
    event: ChangeEvent<HTMLInputElement>
  ) => void
  handleOnDelete: (id: ListItem['id']) => void
}

export const NewListItem = ({
  title,
  isCompleted,
  id,
  handleOnDelete,
  handleToggle,
}: Props) => { 
  return (
    <li key={id} className="py-3 border flex items-center px-4 group">
      <div className="space-x-3">
        <input
          checked={isCompleted}
          onChange={(e) => handleToggle(id, e)}
          type="checkbox"
          name="basic-html"
          id={id}
        />
        <label htmlFor={id}>{title}</label>
      </div>

      <button
        className="border-none px-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => handleOnDelete(id)}
      >
        <span aria-label="cross emoji">╳</span>
      </button>
    </li>
  )
}

