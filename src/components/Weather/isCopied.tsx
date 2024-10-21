import { createPortal } from "react-dom"

const IsCopied = ({copied} : { copied: boolean }) => {
  return createPortal(
    <div className={`${copied ? "block" : "hidden"} h-12 bg-yellow-300 rounded-md w-48 text-white text-center flex items-center justify-center`} >
        {copied && <p className="text-black  bottom-3">Copied To CLipboard</p>}
    </div> ,
    document.querySelector("#iscopy") as HTMLElement
  )
}

export default IsCopied