import { useContext } from "react"
import { Data } from "../LearnCurve/LearnThree"


const Components1 = () => {
    const handleUpdate = () => {
        setProfile({
            name: "Adhi Hutagalung",
            age: 19
        })
    }
    const { 
        profile: { name, age }, 
        setProfile 
    } = useContext(Data)
    return (
        <div>
            <p>Cara Pertama</p>
            <p className="text-xl font-bold">nama = {name}</p>
            <p className="text-xl font-bold">umur = {age}</p>
            <button onClick={handleUpdate} className="bg-blue-300 rounded-md p-1">Update</button>
        </div>
    )
}

export default Components1