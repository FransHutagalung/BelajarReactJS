import { useState } from "react"
import AddCard from "./AddCard"

export interface card {
  name: string,
  quantity: number
}

const Card = (props: any) => {

  const addCard = (item: card) => {
     setItems([...items , item])
  }

  const RemoveCard = (indexItem : number) => {
    console.log(`index : ${indexItem}`)
    setItems(items.filter(( _ , index) => index !== indexItem))
  }

  const [items, setItems] = useState<Array<card>>([
    
  ])

  return (
    <div className="bg-neutral-100 w-auto" >
      {props.children}
      <h2>Card Information</h2>
      <AddCard addItems={addCard} />
      {!items.length ? <p>Card is  empty</p> : items.map((item, index) => (
        <div className="flex w-64 pe-4 justify-between items-center mb-2">
          <li key={index} className="my-1 mx-4">{item.name} - {item.quantity}</li>
          <span className="text-red-500">
          <i onClick={() => RemoveCard(index)}  className="p-2 rounded-md fa-solid fa-trash"></i>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Card