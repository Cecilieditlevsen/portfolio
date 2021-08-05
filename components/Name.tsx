import React from 'react'

type Props = {
  name: string
}

export const Name = (props: Props) => {
  return <p>{props.name}</p>
}
