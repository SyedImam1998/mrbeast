import React from 'react'
import {MdLeaderboard} from 'react-icons/md'
import '../App.css';
import { ScoreContext } from '../App';

export default function Leaderbtn() {
const {value6} =React.useContext(ScoreContext);
const [showleader,setshowleader]=value6;

  return (
    <div className='leaderboard-icon' onClick={()=>{
        setshowleader(!showleader);
    }} ><MdLeaderboard size={25} /></div>
  )
}
