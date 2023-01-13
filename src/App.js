import React,{ useState } from 'react';
import './App.css';

import Homepage from './component/Homepage';
export const ScoreContext=React.createContext();
function App() {
const[score,setScore]=useState(0);
const[name,setName]=useState("imam");
const[open,setopen]=useState(true);
const[countdownbool,setcountdownbool]=useState(false);
const[time,settime]=useState(30)

  return (
    <ScoreContext.Provider value={{value:[score,setScore],value2:[name,setName],value3:[open,setopen],value4:[countdownbool,setcountdownbool],value5:[time,settime]}}>

      <Homepage></Homepage>
    </ScoreContext.Provider>
  );
}

export default App;
