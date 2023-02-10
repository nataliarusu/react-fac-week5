import { useState } from "react"

export default function Shouter(){
    const [inputValue, setInputValue]=useState('');

    function update(event){
        setInputValue(event.target.value)
    }

    return <div>
        <input 
            type="text" 
            onChange={update} 
            value={inputValue} />
        <output>{inputValue}</output>
    </div>

}