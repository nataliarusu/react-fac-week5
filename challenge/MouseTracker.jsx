import { useEffect } from "react";
import { useState } from "react";

export default function MouseTracker(){
    const [mouse, setMouse]=useState([0, 0]);
    const update= (event)=>{
        setMouse( [event.clientX, event.clientY]);
    };

    const [x, y] = mouse;
    useEffect(()=>{
        //add event listener
        window.addEventListener('mousemove', update)
        //clean up 
        return ()=>{
            window.removeEventListener('mousemove', update)
        }
    },[])
    return <output>{x}, {y}</output>
}
