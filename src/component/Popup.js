import React from "react";
import { ScoreContext } from "../App";
import '../App.css';
export default function Popup() {
  const { value2,value3 } = React.useContext(ScoreContext);
  const [open, setopen] = value3;
  const [name,setName]=value2;



const changeName=()=>{
    var name=document.getElementById("name").value;
    console.log(name)
setName(name.toString());
setopen(!open);

}




  return(
    <>
        {open &&
        
        <div className="blackScreen">
            <div className="modalboxC">
                <div><h2>Whack-A-Beast</h2></div>
               <div><input id="name" type="text" placeholder="Name"></input></div>
               <div><button onClick={changeName}>Play</button></div>
                
            </div>
            
            
        </div>
            
            }
    </>
  )
}
