import { useContext } from "react"
import { profileContext } from "../../context/profileContext"
const ProfileChild = () => {
    const { profile: { name, age, address }, setProfile } = useContext(profileContext)
    return (
        <div className="bg-gray-200 w-1/2 rounded-xl my-3 h-32 p-3 flex flex-col gap-2">
            <p>nama = {name}</p> 
            <p>umur = {age}</p> 
            <p>alamat = {address}</p>
        </div>
    )
}

export default ProfileChild