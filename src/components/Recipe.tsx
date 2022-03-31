import Link from 'next/link'

type Props = {
  title: string
  image: string
  id: string
}

const Recipe = ({ title, image, id }: Props) => {
  return (
    <Link href={`/recipes/${id}`}>
      <a>
        <div className="flex flex-col items-center">
          <img
            className="object-cover rounded h-[200px] w-full"
            src={image}
            alt=""
          />
          <h1 className="mt-2">{title}</h1>
        </div>
      </a>
    </Link>
  )
}

export default Recipe
