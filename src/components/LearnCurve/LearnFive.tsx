import { useRef } from "react"


const LearnFive = () => {

  const input = useRef<HTMLInputElement>(null)
  console.log(input)

  const focusFrans = () => {
    input.current?.focus()
    input.current!.value = "Frans"
  }
  

  return (
    <div>
        <p>Learning UseRef</p>
        <input type="text" ref={input} name="" id="" />
        <button onClick={() => focusFrans()}>Focus Frans</button>
    </div>
  )
}

export default LearnFive