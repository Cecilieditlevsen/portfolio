import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const IndexPage = () => {
  // Return JSX
  return (
    <>
      <div className="min-h-screen w-100 flex justify-center items-center">
        <div className="flex space-x-3 ">
          <h1 className="text-xl p-8 border-2 border-solid border-black cursor-pointer">
            <Link href="/shopping-list">
              <a>Shopping list</a>
            </Link>
          </h1>
          <h1 className="text-xl p-8 border-2 border-solid border-black cursor-pointer">
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          </h1>
          <h1 className="text-xl p-8 border-2 border-solid border-black cursor-pointer">
            <Link href="/order-here">
              <a>Fun order app</a>
            </Link>
          </h1>
        </div>
      </div>
    </>
  )
}

export default IndexPage
