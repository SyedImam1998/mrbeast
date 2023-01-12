import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';

export default function ScoreBoard() {
    const {value,value2,value3}=React.useContext(ScoreContext);
    const[score,setScore]=value;
    const[name,setName]=value2;
    const[open,setopen]=value3;
  return (
    <div className='d-none d-lg-flex scoreboard'>
    <div className='logo'></div>
    <div className='score'>
        
        <h1>{score}</h1>
    </div>
    <div className='name'>
        <div className='n'>{name}</div>
        <div className='edit'></div>


    </div>
    
</div>
  )
}
