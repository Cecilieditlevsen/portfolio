import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
import { NewListItem } from '../components/NewListItem'

export type ListItem = {
  title: string
  isCompleted: boolean
  id: string
}

type ActiveListType = 'all' | 'completed' | 'remaining'

const ShoppingList = () => {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<ListItem[]>([])
  const [completedList, setCompletedList] = useState<ListItem[]>([])
  const [remainingList, setRemainingList] = useState<ListItem[]>([])
  const [hasError, setHasError] = useState(false)
  const [activeList, setActiveList] = useState<ActiveListType>('all')


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

  const handleToggle = (
    id: ListItem['id'],
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: event.target.checked,
        }
      }

      return item
    })

    setList(newList)
  }

  useEffect(() => {
    const completedList = list.filter((item) => item.isCompleted === true)
    const remainingList = list.filter((item) => item.isCompleted !== true)

    setCompletedList(completedList)
    setRemainingList(remainingList)
  }, [list])

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
              {activeList === 'completed'
                ? completedList.map(({ title, id, isCompleted }) => (
                    <NewListItem
                      key={id}
                      id={id}
                      isCompleted={isCompleted}
                      title={title}
                      handleOnDelete={handleOnDelete}
                      handleToggle={handleToggle}
                    />
                  ))
                : activeList === 'remai˚ning'
                ? remainingList.map(({ title, id, isCompleted }) => (
                    <NewListItem
                      key={id}
                      id={id}
                      isCompleted={isCompleted}
                      title={title}
                      handleOnDelete={handleOnDelete}
                      handleToggle={handleToggle}
                    />
                  ))
                : list.map(({ title, id, isCompleted }) => (
                    <NewListItem
                      key={id}
                      id={id}
                      isCompleted={isCompleted}
                      title={title}
                      handleOnDelete={handleOnDelete}
                      handleToggle={handleToggle}
                    />
                  ))}
            </ul>
          </div>

          <div className="space-x-3 text-center text-sm mt-6">
            <button
              onClick={() => setActiveList('remaining')}
              className={clsx('hover:underline', {
                'text-brand underline': activeList === 'remaining',
              })}
            >
              Remaining
            </button>

            <button
              onClick={() => setActiveList('completed')}
              className={clsx('hover:underline', {
                'text-brand underline': activeList === 'completed',
              })}
            >
              Completed
            </button>

            <button
              onClick={() => setActiveList('all')}
              className={clsx('hover:underline', {
                'text-brand underline': activeList === 'all',
              })}
            >
              All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
