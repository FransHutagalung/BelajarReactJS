import { useContext } from "react"
import { myContext } from "../../context/ContextNext"



export default function Components3() {
    const {
        count , increment , decrement
    } = useContext(myContext)
  return (
    <div>
         <p>Count is {count}</p>
        <div className="flex gap-3">
        <button className="bg-green-300 w-32 h-32 rounded-md" onClick={increment}>Tambah</button><button className="bg-green-300 w-32 h-32 rounded-md" onClick={decrement}>Kurang</button>
        </div>
    </div>
  )
}
