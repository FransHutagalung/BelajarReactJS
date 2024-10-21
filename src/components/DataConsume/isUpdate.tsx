import React from 'react'
import { createPortal } from 'react-dom'

const IsUpdate = ({isUpdate} : {isUpdate: boolean}) => {
  return createPortal (
    <div className={`${isUpdate ? "block" : "hidden"} h-12 bg-yellow-300 rounded-md w-48 text-white text-center flex items-center justify-center`} >
      {isUpdate && <p className="text-black bottom-3">Data Updated</p>}
    </div> , 
    document.querySelector('#isUpdate') as HTMLElement
  )
}

export default IsUpdate