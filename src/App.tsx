import { useState } from "react"
import LearnOne from "./components/LearnCurve/LearnOne"
import LearnTwo from "./components/LearnCurve/LearnTwo"
import LearnThree from "./components/LearnCurve/LearnThree"
import LearnFour from "./components/LearnCurve/LearnFour"
import LearnFive from "./components/LearnCurve/LearnFive"

function App() {


   const [page , setPage] = useState(0)

   const MaterialApp: Array<() => JSX.Element> = [
      () => <LearnOne />,
      () => <LearnTwo />,
      () => <LearnThree />,
      () => <LearnFour /> ,
      () => <LearnFive />
   ]

   return (
      <>
         <div className="sticky flex flex-row gap-2">
            <button onClick={() => setPage(0)} className="bg-blue-200 h-8 w-32 rounded-md">
               Materi 1
            </button>
            <button onClick={() => setPage(1)} className="bg-blue-200 h-8 w-32 rounded-md">
               Materi 2
            </button>
            <button onClick={() => setPage(2)} className="bg-blue-200 h-8 w-32 rounded-md">Materi 3</button>
            <button onClick={() => setPage(3)} className="bg-blue-200 h-8 w-32 rounded-md">Materi 4</button>
            <button onClick={() => setPage(4)} className="bg-blue-200 h-8 w-32 rounded-md">Materi 5</button>
         </div>
         <div className="p-2">
            {MaterialApp[page]()}
         </div>
      </>
   )
}

export default App
