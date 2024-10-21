import { Data } from "../LearnCurve/LearnThree"

const Components2 = () => {
    return (
        <div>
            <p>Cara Kedua</p> 
            <Data.Consumer>
                {({ profile: { name, age }}) => (
                    <div>
                        <p className="text-xl font-bold">nama = {name}</p>
                        <p className="text-xl font-bold">umur = {age}</p>
                    </div>
                )}
            </Data.Consumer>
        </div>
    )
}

export default Components2