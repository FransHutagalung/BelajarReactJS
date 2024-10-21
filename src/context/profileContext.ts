import { createContext } from "react"

export interface dataProfile {
    name:       string,
    age:        number,
    address:     string
}

export const profileContext = createContext<{
    profile: dataProfile
    setProfile: React.Dispatch<React.SetStateAction<dataProfile>>
}>({
    profile: {
        name: "",
        age: 0,
        address: ""
    },
    setProfile: () => {

    }
})