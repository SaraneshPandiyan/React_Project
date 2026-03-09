import { useEffect, useState } from "react";
import './Cricket.css'
export default function Cricket(){


    const [Runs,setRuns] = useState(0);
    const [Balls,setBalls] =useState(0)
    const [Over,setOvers] =useState(0)
    const [Wicket,setWicket] = useState(0);

    const Wickets = () =>{
        setWicket(Wicket+1);
        setBalls(Balls+1)
    }

    useEffect(()=>{
        if(Balls==6){
            setBalls(0)
            setOvers(Over+1)
        }
    }),[Balls];



   const Update=(runs)=>{
        setRuns(Runs+runs);
        setBalls(Balls+1);
    }

    return (<>
    <div className="container">
    <center>
        <h1>Cricket</h1>
        <h2>Runs : {Runs}</h2>
        <h2>Balls : {Balls}</h2>
        <h2>Over : {Over}</h2>
        <h2>Wicket : {Wicket}</h2>

        <button onClick={()=>Update(1)}>1</button>
        <button onClick={()=>Update(2)}>2</button>
        <button onClick={()=>Update(3)}>3</button>
        <button onClick={()=>Update(4)}>4</button>
        <button onClick={()=>Update(5)}> 5</button>
        <button onClick={()=>Update(6)}>6</button><br></br>
        <button onClick={Wickets}>Wicket</button>
        </center>
        </div>
        </>
    );
}