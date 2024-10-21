import { useEffect, useState } from "react"
import { dataProfile, profileContext } from "../../context/profileContext"
import ProfileChild from "./ProfileChild"
import ProfileEdit from "./ProfileEdit"
import IsUpdate from "./isUpdate"

const Profile = () => {
    const [editMode, setEditMOde] = useState(false)
    const [newUpdate, setNewUpdate] = useState(false)

    useEffect(() => {
        if (newUpdate) {
            setTimeout(() => {
                setNewUpdate(false)
            }, 2000)
        }
    }, [editMode])
    const handleAdd = ({ name, age, address }: dataProfile) => {
        if (name && age && address) {
            setProfile({ name, age, address })
            setEditMOde(false)
            setNewUpdate(true)
        }
    }
    const [profile, setProfile] = useState<dataProfile>({ name: "Marnaek Hutagalung", age: 20, address: "Jalan Asahan" })
    return (
        <div>
            <h2>User Profile</h2>
            <button className="bg-blue-400 p-2 h-12 rounded-lg " onClick={() => setEditMOde((editMode) => !editMode)}>{editMode ? 'Edit Mode' : 'View Mode'}</button>
            {!editMode ? <profileContext.Provider value={{ profile, setProfile }}>
                <ProfileChild />
            </profileContext.Provider> : <ProfileEdit addData={handleAdd} />
            }
            <IsUpdate isUpdate={newUpdate} />
        </div>
    )
}

export default Profile