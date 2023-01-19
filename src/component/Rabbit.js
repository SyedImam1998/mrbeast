import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';
import Beastsound from '../images/beast.wav';
import Cr from '../images/cr.wav';
import Kar from '../images/kar.wav';
import Ch from '../images/ch.wav';
import Nolan from '../images/nol.wav'
import useSound from 'use-sound'
export default function Rabbit(props) {
  let sound;
  if(props.id==="b1" || props.id==="b2" || props.id==='cr2'){
    sound=Beastsound;
  }else if(props.id==="cr1" || props.id==="k2" || props.id==='b3'){
    sound=Cr;


  }else if(props.id==="k1" || props.id==="ch2" || props.id==='b5'){
    sound=Ch;
  }else if(props.id==="cr2" || props.id==="k5" || props.id==='cr3'){
    sound=Kar;
  }else if(props.id==="b4" || props.id==="ch1"){
    sound =Nolan
  }else{
    sound=null;
  }
  
  const [playSound] = useSound(sound);

  // let beast=new Audio('../images/beast.mp3');

  const {value,value5}=React.useContext(ScoreContext);
  const[score,setScore]=value;
  const[time,settime]=value5;

  React.useEffect(()=>{
    if(time<30 && time>0){
      // beastani.current.animationName="example"
      document.getElementById(props.id).style.animationName='example'

    }else{
      // beastani.current.animationName="example"
      document.getElementById(props.id).style.animationName='donothing'


    }



  },[time])
  // console.log(score);
  return (
    
        <div className='rabbitParent' style={{top:props.top,left:props.left}}>
        
        <div className='rabbitP'>
          <div className='rabbit' id={props.id} onClick={()=>{
            setScore(parseInt(score+1));
            
            playSound();
            // beast.play()
          }} style={{ backgroundImage: `url(${props.image})`}}></div>
        </div>
        <div className='hole'>
        </div>
        </div>

   
  )
}
