import Link from 'next/link'

const OrderApp = () => {
  return (
    <>
      <div>
        <h1>Hello from order app!</h1>
        <h1>
          <Link href="./">
            <a>Home</a>
          </Link>
        </h1>
      </div>
    </>
  )
}

export default OrderApp
