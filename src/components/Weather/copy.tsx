import { useState } from "react"
import IsCopied from "./isCopied"

const Copy = () => {

    const [copy, setCopy] = useState(false)
    const [input, setInput] = useState('')

    const handleCopy = () => {
       navigator.clipboard.writeText(input)
       .then(() => {
        setInput("")
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
       })

    }

    return (
        <div className="relative h-32">
            <input className="border-2 border-gray-200 rounded-lg" type="text" value={input} onChange={e => setInput(e.target.value)} name="" id="" />
            <button onClick={handleCopy} className={`p-1 rounded-md ${copy ? 'bg-red-500' : 'bg-blue-500'}`} >Copy</button>
            <IsCopied copied={copy} />
        </div>
    )
}

export default Copy