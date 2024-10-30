import React from 'react'

export default function EventHandler() {

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`button click on ${e.clientX} , ${e.clientY}`);

    }

    const hanleMouseEnter = (e : React.MouseEvent<HTMLDivElement>) => {
        console.log(`mouse enter on ${e.clientX} , ${e.clientY}`);
    }

    return (
        <div className='bg-blue-300 p-4' onMouseEnter={hanleMouseEnter}>
            <p>handle event example</p>
            <button className='bg-black w-36 h-10 text-white' onClick={handleButtonClick}>Tekan saya</button>
        </div>
    )
}
