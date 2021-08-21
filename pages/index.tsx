import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import clsx from 'clsx'
import { ListItem } from '../components/ListItem'
import { nanoid } from 'nanoid'
import { Button } from '../components/Button'

type ListItem = {
  title: string
  isCompleted: boolean
  id: string
}

const IndexPage = () => {
  const [value, setValue] = useState<string>('') 
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [list, setList] = useState<ListItem[]>([])
  const listHasItems = list.length > 0

  const completedItems = list.filter((item) => item.isCompleted).length
  const remainingItems = list.length - completedItems

  // Function to handle the submit event
  // 'e' is the event and is with TypsScript typed as a generic submit event with HTML form element
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Prevent refreshig
    e.preventDefault()

    // If user tries to submit an empty input field, the 'errorMessage' variable is set.
    if (!value) {
      return setErrorMessage('You need to fill out the input.')
    }

    // Creates new list item with the type ListItem that declares the title, id and if its completed 
    const newItem: ListItem = {
      title: value,
      isCompleted: false,
      id: nanoid(),
    }

    // Updates the "list" variable to contain the previous contents and add the new list Item 
    setList((prev) => [...prev, newItem])

    // After succesfull subit the input field and the error message is cleared
    setValue('')
    setErrorMessage('')
  }

  // Function to handle the input change event
  // 'e' is the event and is with TypeScript typed as a generic change event with HTML input element
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Sets the 'value' variable to the value that comes with the change event (i.e. whatever is typed into the input field). The value is nested under 'target' (can also be found under 'currentTarget').
    setValue(e.target.value)
  }

  const handleOnToggle = (id: string) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }

      return item
    })

    setList(newList)
  }

  const handleOnDelete = (id: string) => {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }


  // Return JSX
  return (
    <div className="py-20 bg-green-100 min-h-screen">
      <div className="max-w-prose mx-auto px-5">
        {/* Form element with sumbit event handler and change event handler. Event handlers always recieve an event of the respected type (eg. click, change, submit) */}
        {/* Submit event handler is called when a button within the form element is pressed and have the type 'submit' */}
        {/* When the button is pressed, the function 'handleSubmit' runs. */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <input
              value={value}
              // Change event handler: onChange is called when the input field changes i.e. every time a key is pressed. The function 'handleChange' is then called, and receives the change event.
              onChange={handleChange}
              // I use clsx (a utility for constructing className strings conditionally) to apply default styles and error styles when there's an error.
              // https://www.npmjs.com/package/clsx
              className={clsx(
                'p-4 w-full shadow-md rounded focus:ring-2 focus:ring-purple-600 outline-none',
                {
                  'border-2 border-red-500': errorMessage,
                }
              )}
              type="text"
              placeholder="What to do?"
            />

            <Button type="submit" variant="purple" className="min-w-[80px] text-base min-h-[46px]">
              Add
            </Button>
          </div>

          {/* Ternary: If errorMessage is truthy (true, non-empty string etc.) then output HTML otherwise don't do anything (null) */}
          {errorMessage ? (
            <div className="mt-3">
              <p className="text-red-500 text-sm" role="alert">
                {/* Contains the error message */}
                {errorMessage}
              </p>
            </div>
          ) : null}
        </form>

        <div className="flex flex-col p-6 bg-white min-h-[200px] mt-8 shadow-md">
          <h2 className="text-2xl font-bold mb-1 md:mb-6">
            {listHasItems
              ? 'You have things to do!'
              : 'You can relax. There is nothing to do'}
          </h2>

          {listHasItems ? (
            <>
              <div className="space-x-3 text-sm text-gray-600 mb-6 md:hidden">
                <span>Remaining: {remainingItems}</span>
                <span>Completed: {completedItems}</span>
              </div>

              <ul className="space-y-3">
                {list.map(({ id, title, isCompleted }) => (
                  <ListItem
                    key={id}
                    title={title}
                    onToggle={() => handleOnToggle(id)}
                    onDelete={() => handleOnDelete(id)}
                    isCompleted={isCompleted}
                  />
                ))}
              </ul>

              <div className="space-x-3 text-sm mt-auto ml-auto pt-6 text-gray-600 hidden md:block">
                <span>Remaining: {remainingItems}</span>
                <span>Completed: {completedItems}</span>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
