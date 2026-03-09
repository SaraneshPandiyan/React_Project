
import { useState } from "react"

export default function ExpHandle(){
    const [name , setname] = useState("");
    
    const change =(event)=> {
        // event.target.value;
        setname(event.target.value);
    }
    return(
        <div>
        <h1>Demo part</h1>
        <input type="text"placeholder="enter name" onChange={change}></input>
        <h1 >{name}</h1>
        </div>
    );
}