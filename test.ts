type Number = {
  a: number
}

export const addOne = (lars: Number) => {
  return lars.a + 1
}

addOne({ a: 5 })

const sayHi = (
  firstName: string,
  middleName: string,
  lastName: string,
  age: number
) => {
  return 'Hi' + firstName
}

type SayHiButBetterParams = {
  firstName: string
  middleName?: string
  lastName: string
  age: number
}

const sayHiButBetter = (params: SayHiButBetterParams) => {
  return 'Hi' + params.firstName
}

sayHi('Lars', 'Libst', 'Jensen', 40)

sayHiButBetter({
  firstName: 'Lars',
  lastName: 'Jensen',
  age: 40,
})

const addTwo = (finn: number) => finn + 2


addTwo(2)