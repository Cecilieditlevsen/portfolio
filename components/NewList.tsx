import React from 'react'

type Props = {
  title: string
  isCompleted?: boolean
}

export const newList = ({ title, isCompleted = false }: Props) => {
  return (
    <div>
      <li className="py-3 border flex items-center px-4 space-x-3">
        <input type="checkbox" name="basic-html" id="basic-html" />
        <label htmlFor="basic-html">Set up basic HTML</label>
      </li>
      <li className="py-3 border flex items-center px-4 space-x-3">
        <input type="checkbox" name="logic" id="logic" />
        <label htmlFor="logic">Build logic</label>
      </li>
      <li className="py-3 border flex items-center px-4 space-x-3">
        <input type="checkbox" name="ui" id="ui" />
        <label htmlFor="ui">Set up basic HTML</label>
      </li>{' '}
    </div>
  )
}
