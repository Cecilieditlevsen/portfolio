const ShoppingList = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-prose mx-auto px-5">
        <div className="bg-white min-h-[200px] p-5 shadow-md">
          <form className="flex space-x-4">
            <input
              className="p-3 w-full bg-blue-200 "
              type="text"
              placeholder="What to do?"
            />
            <button className="bg-blue-200 px-6 py-2">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
