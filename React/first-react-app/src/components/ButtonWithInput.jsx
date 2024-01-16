import React, { useState } from 'react'

export default function ButtonWithInput(){
    const [inputValue, setInputValue] = useState('')

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const buttonClicked = () => {
        alert(inputValue)
        setInputValue('')
    }

    return <div>
        <input type="text" onInput={handleInput} />
        <button onClick={buttonClicked}>Click me!</button>
    </div>
}