import React from 'react'


const Weather = ({temperature} : {temperature : number}) => {
  return (
    <>
      <div className='text-xl '>
      {temperature < 15 ? <p className='text-blue-500'>Its cold here </p> : temperature > 15 && temperature < 25 ? <p className='text-yellow-500'>Its warm here </p> : <p className='text-red-500'>Its hot outside </p>}
      </div>
    </>
  )
}

export default Weather