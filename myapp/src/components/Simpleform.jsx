import { useState } from "react";

export default function Sform(){

    // useState("")

    const changehandles = (event) =>{
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }
    return (
        <>
        <form onSubmit={changehandles}>
        <h1>PRINT SARAN NAME AND ID</h1>
        <input type="text" placeholder="name" name="name"/>
        <br></br>
        <input type="text" placeholder="email" name="email"/>
        <br />
        <button type="submit">Submit</button>
        </form>
        </>
    );
}