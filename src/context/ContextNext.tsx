import { Children, createContext, useState } from "react"

interface myContextProps {
    count : number,
    increment : () => void
    decrement : () => void
}

export const myContext = createContext<myContextProps>({
    count : 0 ,
    increment : () => {},
    decrement : () => {}
})

interface myProviderProps {
    children : React.ReactNode
}

export const ContextNext : React.FC<myProviderProps> = ({children}) =>  {
  const [count , setCount] = useState(0)
  const increment = () => {
      setCount((prev) => prev + 1)
  }
  const decrement = () => {
      setCount((prev) => prev - 1)
  }
  
  return (
    <myContext.Provider value={{count , increment , decrement}}>
        {children}
    </myContext.Provider>
  )
}

