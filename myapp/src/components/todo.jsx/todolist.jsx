import { useState } from 'react'
import Main from './Main'

export default function todo(){

    const [input,setinput]=useState("")

    const submite =(e)=>{
        // 
        setinput(e.target.value)
    }

    const submited=(e)={
    //    e.preventDefault()
        if(value=""){
            console.log("fine....")
        }
    }

    return (
        <>
        <form onSubmit={submited}>
            <h1>Enter the dataset</h1>
            <input placeholder='enter the list' 
    type='text' 
    onChange={submite}
    />
    <h2>{input}</h2>
    <button type='submit'>ADD</button>
    </form>
    </>
    )
}