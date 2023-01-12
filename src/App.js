import React,{ useState } from 'react';
import './App.css';

import Homepage from './component/Homepage';
export const ScoreContext=React.createContext();
function App() {
const[score,setScore]=useState(0);
const[name,setName]=useState("imam");
const[open,setopen]=useState(true)

  return (
    <ScoreContext.Provider value={{value:[score,setScore],value2:[name,setName],value3:[open,setopen]}}>

      <Homepage></Homepage>
    </ScoreContext.Provider>
  );
}

export default App;
