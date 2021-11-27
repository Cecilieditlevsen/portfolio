import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const IndexPage = () => {
  // Return JSX
  return (
    <h1>
      <Link href="/shopping-list">
        <a>Shopping list</a>
      </Link>
    </h1>
  )
}

export default IndexPage
