import UserFavourite from "./userFavourite"
function Profile() {
  return (
    <div className="bg-neutral-200 w-[400px] h-[200px] p-4 rounded-lg m-2">
        <h1 className="text-xl font-bold mb-4"> Profile </h1>
        <UserFavourite />
    </div>
  )
}

export default Profile