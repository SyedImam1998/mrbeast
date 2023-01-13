import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';
export default function Rabbit(props) {

  const {value}=React.useContext(ScoreContext);
  const[score,setScore]=value;
  console.log(score);
  return (
    
        <div className='rabbitParent' style={{top:props.top,left:props.left}}>
        
        <div className='rabbitP'>
          <div className='rabbit' id={props.id} onClick={()=>{
            setScore(parseInt(score+1));
            console.log("score",score)
          }} style={{ backgroundImage: `url(${props.image})`}}></div>
        </div>
        <div className='hole'>
        </div>
        </div>

   
  )
}
