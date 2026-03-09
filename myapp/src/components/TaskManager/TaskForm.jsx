import { useState } from "react";

export default function Taskform({addtask}){
   const [values, setvalues] = useState("")
    const inputchange =(e)=>{
         setvalues(e.target.value);
    }

    
    const formcall =(e)=>{
        e.preventDefault();
        if(values==""){
        console.log("enter the values");
        }
        else{
            console.log(values)
            addtask(values)
            setvalues("")
        }

        
    }

   return (
     <form onSubmit={formcall}>
    <h1>Task Manager</h1>
    <input type="text" 
    onChange={inputchange}
    // name="inputs"
    value={values}
    placeholder="Task"
    className="input" /><br /><br />
    <h3 id="enter" >{values}</h3>
   <button type="submit" className="submit" style={{backgroundColor:"red"}}>ADD</button>
  
   </form>
   )   
}