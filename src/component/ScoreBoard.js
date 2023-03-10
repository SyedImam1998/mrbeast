import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';

export default function ScoreBoard() {
    const {value,value2,value3}=React.useContext(ScoreContext);
    const[score,setScore]=value;
    const[name,setName]=value2;
    const[open,setopen]=value3;
  return (
    <div className=''>
     <div className='d-none d-lg-flex scoreboard'>
    <div className='logo'></div>
    <div className='score'>
        
        <h1>{score}</h1>
    </div>
    <div className='name'>
        <div className='n'>{name}</div>
        <div className='edit' onClick={()=>{
          setopen(true);
        }}></div>


    </div>
     </div> 
     <div className='smallscreen-scoreboad'>
      <div>Score</div>
      <div>{score}</div>
     </div>
    
</div>
  )
}
