import { useState } from "react"

const buttonClick = () => {
    console.log("button clicked")
}

export default function Clicker() {
    return(        
        <div>
            <div>Click amount</div>
            <button onClick={buttonClick}>Click me</button>
        </div>
    )
}