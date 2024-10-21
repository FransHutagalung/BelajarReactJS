
interface Props {
    isAdmin : boolean ,
    loggedIn : boolean 
}
const IsAdmin = (props : Props) => {
  return (
   <>
     {props.loggedIn && (props.isAdmin  ?  <p>welcome Admin</p> : <p>welcome user</p> )}
   </>
     
  )
}

export default IsAdmin