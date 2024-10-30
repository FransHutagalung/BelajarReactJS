import { useEffect, useReducer, useState } from "react"

interface stateInterface {
    count: number
    notification: boolean
}

type Action = {
    type: "INCREMENT"
} | {
    type: "DECREMENT"
} | {
    type: "reset"
} | {
    type: "incrementPayload"
    Payload: number
} | {
    type: "decrementPayload"
    Payload: number
}

const initialState: stateInterface = {
    count: 0, 
    notification: false
}

const reducer = (state: stateInterface, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        case "reset":
            return { ...state, count: 0 }
        case "incrementPayload":
            return { ...state, count: state.count + action.Payload }
        case "decrementPayload":
            return { ...state, count: state.count - action.Payload }
        default:
            return state
    }
}

const LearnFour = () => {


    const [Payload, setPayload] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log('updated state')
    }, [state])


    return (
        <div>
            <p className="text-2xl ">Learning UseReducer</p>
            <div className="h-10"></div>
            <h1 className="text-3xl">{state.count}</h1>
            <div className="h-16"></div>
            <div className="flex gap-2">
                <button className="bg-blue-400 rounded-md p-1" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button className="bg-blue-400 rounded-md p-1" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                <button className="bg-blue-400 rounded-md p-1" onClick={() => dispatch({ type: "reset" })}>Reset</button>

                <p>Action from Payload</p>
                <div className="flex gap-2">
                    <input value={Payload} type="text" onChange={(e) => setPayload(Number(e.target.value))} name="" id="" className="border-2 rounded-md p-2" />
                    <button className="bg-blue-400 rounded-md p-1" onClick={() => {
                        dispatch({
                            type: "incrementPayload", Payload: Payload
                        })
                        setPayload(0)
                    }}>Add</button>
                    <button className="bg-blue-400 rounded-md p-1" onClick={() => {
                        dispatch({
                            type: "decrementPayload", Payload: Payload
                        })
                        setPayload(0)
                    }}>Substract</button>
                </div>

            </div>
        </div>
    )
}

export default LearnFour