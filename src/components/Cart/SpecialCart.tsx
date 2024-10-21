import { useState, useEffect } from "react"
interface special {
  name: string
  age: number
  student?: boolean
}


const SpecialCart = () => {


  const handleUpdate = (e: any) => {
    const { name , type , value , checked } = e.target
    const fieldValue = type === "checkbox" ? checked : value
    setSpecial((prevdata: any) => ({
      ...prevdata,
      [name]: fieldValue
    }))
  }

  const cleanStorage = () => {
    setSpecial({name : "", age : 0, student : false})
    localStorage.removeItem("data")
  }

  const [special, setSpecial] = useState(() => {
    const data = localStorage.getItem("data")
    return data ? (JSON.parse(data) as special) : {name : "", age : 0, student : false}
  })

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(special))
  }, [special ])

  return (
    <div>
      <p>Information Account</p>
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-col gap-3 min-w-[250px] max-w-[400px]">
          <h1 className="text-2xl font-bold">Name : {special.name}</h1>
          <h1 className="text-2xl font-bold">Age : {special.age}</h1>
          <h1 className="text-2xl font-bold">Student : {special.student ? "Yes" : "No"}</h1>
        </div>
        <div className="flex flex-col gap-3">
          <input className="border-2 border-gray-300 rounded-lg p-2" type="text" name="name" value={special.name} onChange={handleUpdate} />
          <input className="border-2 border-gray-300 rounded-lg p-2" type="text" name="age" value={special.age} onChange={handleUpdate} />
          <input className="border-2 border-gray-300 rounded-lg p-2" type="checkbox" name="student" checked={special.student} onChange={handleUpdate} />
        </div>
        <button className="h-6  p-4 flex  items-center bg-blue-300 rounded-lg" onClick={cleanStorage}>Clear</button>
      </div>
    </div>
  )
}

export default SpecialCart