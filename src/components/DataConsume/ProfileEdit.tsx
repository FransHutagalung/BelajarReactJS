import React, { useState } from 'react'
import { dataProfile } from '../../context/profileContext'

const ProfileEdit = ({ addData }: { addData: ({ }: dataProfile) => void }) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    const handleUpdate = (e: any) => {
        e.preventDefault()
        addData({ name, age : Number(age), address })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>

                <div className="flex w-1/2 flex-col gap-2 my-2">
                    <label htmlFor="name">Name</label>
                    <input className='h-12 rounded-md p-2' type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="age">Age</label>
                    <input className='h-12 rounded-md p-2' type="text" value={age} name="age" id="age" onChange={(e) => setAge(e.target.value)} />
                    <label htmlFor="address">Address</label>
                    <input className='h-12 rounded-md p-2' type="text" value={address} name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
                    <button type='submit' className="bg-blue-400 p-2 h-12 rounded-lg ">Save</button>
                </div>
            </form>
        </div>
    )
}

export default ProfileEdit