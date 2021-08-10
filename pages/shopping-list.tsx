import { ChangeEvent, FormEvent, useState } from 'react'

const ShoppingList = () => {
  const [value, setValue] = useState<string>('')
  const [todo, setTodo] = useState<[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('yay')
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
              onChange={handleChange}
              className="p-3 w-full bg-gray-200 "
              type="text"
              placeholder="What to do?"
            />

            <button className="bg-brand text-white px-6 py-2">Add</button>
          </form>

          <div className="mt-12">
            <ul className="space-y-4">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
