
const Premium = () => 
        <div>
            <h1>You Are a Premium</h1>
        </div>

const Normal = () => 
        <div>
            <h1>You Are a Normal</h1>
        </div>

    
const IsPremium = ({ isValid }  : { isValid: boolean }) => {
    return (
        <div className="bg-gray-200 rounded-md p-2">
            {isValid ? Premium() : Normal()}
        </div>
    )
}

export default IsPremium