import React, { useState } from "react"

export default function InputReversed(){
    const [text, setText] = useState("")
    const [reversedText, setReversedText] = useState("")

    const handleTextInput = (event) => {
        setText(event.target.value)
        console.log(event.target.value);
        setReversedText(event.target.value.split("").reverse().join(""))
    }
    
    return <div>
        <input type="text" onInput={handleTextInput} />
        <div>{reversedText}</div>
    </div>
}