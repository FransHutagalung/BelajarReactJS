import { createContext, useState } from "react";
import Components1 from "../DataConsume/Components1";
import Components2 from "../DataConsume/Components2";
import Profile from "../DataConsume/Profile";
import { ContextNext } from "../../context/ContextNext";
import Components3 from "../DataConsume/Components3";



// Interface
interface data {
    name: string;
    age : number;
}

// Context
export const Data = createContext<{
    profile: data;
    setProfile: React.Dispatch<React.SetStateAction<data>>;
}>({
    profile: {
        name: "", age: 0
    },
    setProfile: () => {

    }
});

const LearnThree = () => {
    const [profile, setProfile] = useState<data>({
        name: "Fransiskus",
        age: 20
    });

    return (
        <div className="flex flex-col ">
            <div className="w-1/2">
                <Data.Provider value={{ profile, setProfile }}>
                    <Components1 />
                    <Components2 />
                </Data.Provider>
            </div>
            <div className="w-1/2">
                <Profile />
            </div>
            <p>Context Lanjutan</p>
            <ContextNext >
                <Components3 />
            </ContextNext>
        </div>
    );
};

export default LearnThree;
