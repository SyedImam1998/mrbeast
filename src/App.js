import React,{ useState } from 'react';
import './App.css';
import { LazyMotion, domAnimation } from "framer-motion"
import Homepage from './component/Homepage';
export const ScoreContext=React.createContext();
function App() {
const[score,setScore]=useState(0);
const[name,setName]=useState("Mr Beast");
const[open,setopen]=useState(true);
const[countdownbool,setcountdownbool]=useState(false);
const[time,settime]=useState(30);
const[showleader,setshowleader]=useState(false);
const[play,setPlay]=useState(false);
const[loading,setloading]=useState(false)

  return (
    <ScoreContext.Provider value={{value8:[loading,setloading],value:[score,setScore],value2:[name,setName],value3:[open,setopen],value4:[countdownbool,setcountdownbool],value5:[time,settime],value6:[showleader,setshowleader],value7:[play,setPlay]}}>
      <LazyMotion features={domAnimation}>

      <Homepage></Homepage>
      </LazyMotion>
    </ScoreContext.Provider>
  );
}

export default App;
