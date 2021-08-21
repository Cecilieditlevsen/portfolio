import { ChangeEvent, FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
import { ListItem } from '../components/ListItem'

type ListItem = {
  title: string
  isCompleted: boolean
  id: string
}

const ShoppingList = () => {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<ListItem[]>([])
  const [hasError, setHasError] = useState(false)
  const listHasItems = list.length > 0

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value) {
      return setHasError(true)
    }

    const newListItem: ListItem = {
      title: value,
      isCompleted: false,
      id: nanoid(),
    }

    setList((prev) => [...prev, newListItem])
    setValue('')
    setHasError(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleOnDelete = (id: ListItem['id']) => {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <div className="bg-brand min-h-screen py-20">
      <div className="max-w-prose mx-auto px-5">
        <div className="bg-white min-h-[200px] p-5 shadow-md flex flex-col">
          <h1 className="text-center text-2xl font-medium tracking-wide text-[#2b2b2b]">
            Todays schedule
          </h1>

          <form onSubmit={handleSubmit} className="flex space-x-4 mt-6">
            <input
              value={value}
              onChange={handleChange}
              className={clsx('p-3 w-full bg-gray-200', {
                'border-2 border-red-500': hasError,
              })}
              type="text"
              placeholder="What to do?"
            />

            <button className="bg-brand text-white px-6 py-2">Add</button>
          </form>

          {hasError ? (
            <div className="mt-2 text-red-500">
              <p className="text-xs"> You need to fill out the input</p>
            </div>
          ) : null}

          <div className="mt-12">
            <ul className="space-y-4">
              {list.map(({ title, id, isCompleted }) => (
                <li
                  key={id}
                  className="py-3 border flex items-center px-4 group"
                >
                  <div className="space-x-3">
                    <input type="checkbox" name="basic-html" id={id} />
                    <label htmlFor={id}>{title}</label>
                  </div>

                  <button
                    className="border-none px-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleOnDelete(id)}
                  >
                    <span aria-label="cross emoji">╳</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
