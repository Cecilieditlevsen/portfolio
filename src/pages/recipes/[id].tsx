import Link from 'next/link'
import { useRouter } from 'next/router'

import { findRecipe } from '../../data/recipes'

const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  const recipe = findRecipe(id as string)

  console.log('my found recipe: ', recipe)

  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <h1>
          <Link href="/recipes">
            <a>Back</a>
          </Link>
        </h1>

        <div className="w-100 flex justify-center">
          <h1 className="font-bold text-2xl font-">{recipe.title}</h1>
        </div>

        <div className="w-100 flex justify-center px-4 mt-6">
          <img
            className="object-cover rounded h-[300px] md:h-[600px] w-full lg:w-[1200px]  "
            src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>

        <div className="w-100 flex justify-center">
          <div className="w-100 lg:w-[1200px] bg-amber-100 mx-4 mt-8 p-10 shadow-sm ">
            <div className="flex justify-center">
              <h1 className="text-xl">{recipe.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row mt-8">
              <div className="flex flex-col justify-center md:justify-start md:flex-1">
                <h1 className="font-bold">Ingredienser</h1>
                <ul className="space-y-2 mt-2">
                  <li>Minivan</li>
                  <li>Toyota Expedition</li>
                  <li>BMW Golf</li>
                  <li>Hyundai Charger</li>
                  <li>Maserati Spyder</li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-1 mt-8 md:mt-0">
                <h1 className="font-bold">Fremgangsmåde</h1>
                <div className="mt-2">
                  <p>
                    Commodi laudantium veniam reiciendis vero. Et maiores eos
                    esse tenetur et qui enim. Quo iste quia voluptatem vel modi
                    eum omnis voluptas reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe
