import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';
import Count from './Count';

export default function CountDown() {
const {value,value3,value4,value5} =React.useContext(ScoreContext);
const[score,setScore]=value;
const[open,setopen]=value3;
const[countdownbool,setcountdownbool]=value4;
const[time,settime]=value5;


React.useEffect(() => {
  if(!open && !countdownbool){

    let intervalId = setInterval(() => {
      if(time > 0) {
        settime(time - 1);
      }else{
        setcountdownbool(true)
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }
}, [time,open,countdownbool]);

function resetTimer() {
  setScore(0);
  settime(30);
}




  return (
    <div>

    <div className='timer'>
        <Count progress={time} count={time}></Count>
        <button onClick={
          resetTimer
        }>reset</button>

    </div>
     </div>
  )
}
