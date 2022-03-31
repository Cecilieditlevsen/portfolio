type Recipe = {
  id: string
  title: string
  description: string
}

const createRecipe = (input: Recipe) => input
export const findRecipe = (id: Recipe['id']) =>
  recipes.find((recipe) => recipe.id === id)

const lasagna = createRecipe({
  id: 'lasagna',
  title: 'Lasagne',
  description: 'Lasagne er godt',
})

const frikadeller = createRecipe({
  id: 'frikadeller',
  title: 'Frikadeller',
  description: 'Frikadeller er godt',
})

const shin = createRecipe({
  id: 'shin-ramyun',
  title: 'Shin Ramyun',
  description: 'Shin Ramyun er godt',
})

const millionboef = createRecipe({
  id: 'millionboef',
  title: 'Millionbøf',
  description: 'Millionbøf er godt',
})

export const recipes: Recipe[] = [lasagna, frikadeller, shin, millionboef]
