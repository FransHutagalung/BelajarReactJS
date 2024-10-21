import { useEffect, useState } from "react"
import { card } from "./Card"


const AddCard = ({addItems} : {addItems : ({} : card) => void} ) => {
    const handleSubmit = (e : any) => {
        e.preventDefault()
        if(!name || !quantity) return
        if(isNaN(Number(quantity))) return
        addItems({name , quantity : Number(quantity)})
        setName("")
        setQuantity("")
    }
    const [name , setName] = useState("")
    const [quantity , setQuantity] = useState("")
    const [error , setError] = useState(false)

    useEffect(() => {
        console.log('called use effect');
        
        if(isNaN(Number(quantity))){ 
            setError(true)
        }else{
            setError(false)
        }
    } , [quantity])

    return (
    <div>
        <h1>Add Card</h1>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col gap-2">
        <div className="flex w-1/3 gap-2">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder="Name" id="" className="border-2 border-green-400 h-10  p-2 rounded-md w-1/2" />
            <input value={quantity} onChange={(e) => setQuantity((e.target.value))} type="text" name="" placeholder="Quantity" id="" className="border-2 border-green-400 h-10  p-2 rounded-md w-1/2" />
            <button className="bg-green-500 text-white p-2 rounded-md" type="submit">Add</button>            
        </div>
        <p>{error && <p className="text-red-500">Quantity must be a number</p>}</p>
        </div>
        </form>
    </div>
  )
}

export default AddCard