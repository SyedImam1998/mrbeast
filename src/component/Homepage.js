import React from 'react'
import '../App.css';
import Rabbit from '../component/Rabbit';
import Beast from '../images/beast.png';
import Chris from '../images/chris.png';
import Chan from '../images/chan.png';
import Kar from '../images/kar.png';
import Nol from '../images/nol.png';
import Hammer from '../images/hammer.mp3';
import { ScoreContext } from '../App';
import ScoreBoard from './ScoreBoard';
import Popup from './Popup';
import CountDown from './CountDown';
import{motion, AnimatePresence} from 'framer-motion'
import Leaderbtn from './Leaderbtn';
import useSound from 'use-sound'

// import React from 'react';

export default function Homepage() {
    const [xpos,setx]=React.useState('0px');
    const [ypos,sety]=React.useState('0px');
    const [playSound] = useSound(Hammer);

    
    // console.log(value);
  return (
    <div className="App" onMouseMove={(e)=>{
        
        setx(e.pageX+'px');
        sety(e.pageY+'px')
        
      }}
      onClick={()=>{
        var cur=document.getElementsByClassName("cursor")[0];
        cur.classList.add('cursorClicked');
        setTimeout(()=>{
          cur.classList.remove('cursorClicked');
        },100)
        playSound();

      }}
      >
        <Popup></Popup>
        <ScoreBoard></ScoreBoard>
        {/* <Leaderbtn></Leaderbtn> */}
        {/* <div className='wallpaper'></div> */}
        <CountDown></CountDown>
        <div className='cursor' style={{top:ypos,left:xpos}}></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12'>
             <div className='hole-board1'></div>
            <div className='hole-board'>
             </div>
             {/* 1 */}


             <div className="beast1">

             <Rabbit id="b1" image={Beast} top="-10%" left="47%"></Rabbit>
             </div>

             <div className="beast2">
              <Rabbit id="b2" image={Beast} top="70%" left="12%"></Rabbit>
              </div>

             <div className="beast3">
              <Rabbit id="cr2" top="65%" left="63%" image={Beast} ></Rabbit>
              </div>

             <div className="beast4">
              <Rabbit id="b4" image={Nol} top="7%" left="60%"></Rabbit>
              </div>
  
             <div className="beast5">
              <Rabbit id="k1"  top="79%" left="47%" image={Chan} ></Rabbit>
              </div>

             <div className="beast6">
              <Rabbit id="ch2"  top="15%" left="32%" image={Chan}> </Rabbit>
              </div>

             <div className="beast7">
              <Rabbit id="b5" top="25%" left="62%" image={Chan} ></Rabbit>
              </div>
             
             <div className="beast8">
              <Rabbit id="cr1" top="65%" left="30%" image={Chris} ></Rabbit>
              </div>

             <div className="beast9">
              <Rabbit id="k2" top="25%" left="47%" image={Chris} ></Rabbit>
              </div>

             <div className="beast10">
              <Rabbit id="b3" image={Chris}  top="70%" left="82%"></Rabbit>
              </div>
             
             <div className="beast11">
              <Rabbit id="ch1" top="56%" left="46%" image={Nol}></Rabbit>
              </div>
              
             <div className='beast12'>

             <Rabbit id="cr3" top="46%" left="75%"  image={Kar} ></Rabbit>
             </div>

             <div className="beast">
              <Rabbit id="k5" top="46%" left="25%" image={Kar} ></Rabbit>
              </div>
  
  
            
            </div>
          </div>
        </div>
      
       
      </div>
  )
}
