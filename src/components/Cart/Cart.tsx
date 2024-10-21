import { useState } from "react"
import AddCart from "./AddCart"


const Cart = () => {
  const [cart , setCart] = useState<Array<string>>([
    "Item 1",
    "Item 2",
    "Item 3",
  ])

  const handleAdd = (newItem : string) => {
    setCart([...cart, newItem])
  }

  return (
    <>
      <h2 className="text-2xl font-bold my-3">Cart </h2>
      {cart.length && <p>Cart is not empty</p> }
      <p>Cart </p>
      <div className="flex gap-2">
      <ul key={Math.random()} className="px-2 list-disc">
        {cart.map((item , index) => (
             <li key={index} className="my-1 mx-4">{item}</li>
        ))}
      </ul>
      <AddCart onAddTask={handleAdd} /> 
      </div>
    </>
  )
}

export default Cart