import Link from 'next/link'
import { nanoid } from 'nanoid'

import Recipe from '../../components/Recipe'
import { recipes } from '../../data/recipes'

const Recipes = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <div>
          <h1>Hello from Reciepes!</h1>
        </div>
        <h1>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>

        <div className="flex flex-col justify-center items-center mb-12 space-y-4">
          <h1 className="font-bold text-2xl font-">Opskrifter</h1>
          <input
            className="p-3 w-64 md:w-96 shadow-md"
            type="text"
            placeholder="Søg"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto px-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={
                'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Recipes
