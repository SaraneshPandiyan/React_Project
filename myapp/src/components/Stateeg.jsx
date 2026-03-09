import { useState } from "react";


export default function Stateeg(){

    console.log("fine...")
    const[count , setcount]=useState(0)
    const sum = ()=>{
        if(count <10) 
        setcount(count+1);
    else{
        setcount("done");
    }
    }
    return ( <div>
    <h1>sarana</h1>
        <button onClick={sum}>count {count}</button>
        </div>
    );
}



