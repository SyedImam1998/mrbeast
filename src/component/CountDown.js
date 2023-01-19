import React from 'react'
import '../App.css';
import { ScoreContext } from '../App';
import Count from './Count';
import supabase from '../supabase';
import ScoreBoard from './ScoreBoard';
import Leaderbtn from './Leaderbtn';

export default function CountDown() {
const {value,value2,value3,value4,value5,value7,value8} =React.useContext(ScoreContext);
const[score,setScore]=value;
const[open,setopen]=value3;
const[play,setPlay]=value7;
const[name,setName]=value2; 
const[countdownbool,setcountdownbool]=value4;
const[time,settime]=value5;
const [calledApi,setcalledApi]=React.useState(false);
const[loading,setloading]=value8;


const[data,setData]=React.useState([]);


React.useEffect(() => {
  console.log("useEffect",open,countdownbool,calledApi,play)
  if(!open && !countdownbool && !calledApi && play){

    let intervalId = setInterval(() => {
      if(time > 0) {
        settime(time - 1);
      //  if(time===1){
      //   setcalledApi(false);
      //  }
      }else{
        // setcountdownbool(true)
        if(!calledApi){
          console.log("calledapi",calledApi)
          setcalledApi(true);
          setPlay(false)
          lookScores();

        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }
}, [time,open,countdownbool,calledApi,play]);

function resetTimer() {
  setScore(0);
  settime(30);
}


const lookScores=async()=>{
  console.log("lookScore function")

    let { data: data, error } = await supabase
    .from('MrBeast')
    .select('*').limit(11)
    console.log(data);
  

  // setData(name);

  let found=false;
  let sortedData=data.sort((a,b)=>(a.score<b.score)?1:-1);
  console.log(sortedData);
  if(sortedData.length<10){
      // let data={
      //   name:name,
      //   score:score
      // }
      if(!calledApi){
        // setcalledApi(true);
        setloading(true)
        const{error}=await supabase.from('MrBeast').insert({name,score});
        setloading(false)
        
        setcountdownbool(true)
        setcalledApi(false);
      }
        // console.log(data

}else{
        let id;
        for(let i=0;i<sortedData.length;i++){
          if(sortedData[i].score<score){
            id=sortedData[i].id;
            found=true;
            break;


          }
  }
  console.log(id);
  if(found){
    if(!calledApi){
      // setcalledApi(true);
      //const{data,error}=await supabase.from('MrBeast').update({ name: name,score:score }).eq('id', id);
      setloading(true)

      const { error } = await supabase.from('MrBeast').delete().eq('id', sortedData[sortedData.length-1].id);
      const{error1}=await supabase.from('MrBeast').insert({name,score});
      setloading(false)


      setcountdownbool(true)
      setcalledApi(false)

    }
    console.log(data)
  }else{
    setcountdownbool(true);
    setcalledApi(false)

  }
    
    
   

}

}


const startTimer=()=>{
  setPlay(true);
  settime(30);
  setScore(0);

}

  return (
    

    <div className='timer'>

      <div>
        <Count progress={time} count={time}></Count>
       {play ? <button onClick={resetTimer}>Reset</button>:<button onClick={startTimer}>Start</button> } 
      </div>

      <div>
        <Leaderbtn></Leaderbtn>
      </div>
        
    </div>
    
  )
}
