export const Header = () => {
    return (
        <div className="bg-neutral-500 w-full h-12 py-2 px-4  flex justify-between">
            <h1> Fransiskus Hutagalung </h1>
            <div>
                <ul className="flex flex-row gap-3 ">
                    <li className="cursor-pointer">Home </li>
                    <li className="cursor-pointer">About </li>
                    <li className="cursor-pointer">Contact </li>
                </ul>
            </div>
        </div>
    )
}