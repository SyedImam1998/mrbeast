import React from "react";
import { ScoreContext } from "../App";
import '../App.css';
import Logo from '../images/logo.png';
import Logo2 from '../images/image2.png';
import { motion, AnimatePresence } from "framer-motion";
export default function Popup() {
  const { value,value2,value3,value4,value5 } = React.useContext(ScoreContext);
  const [open, setopen] = value3;
  const [name,setName]=value2;
  const[countdownbool,setcountdownbool]=value4;
  const [score,setScore]=value;
const[time,settime]=value5;




const changeName=()=>{
    var name=document.getElementById("name").value;
    console.log(name)
setName(name.toString());
setopen(!open);

}




  return(
    <>
        <AnimatePresence>
        {open &&
        <motion.div
        initial={{y:-1000,opacity:0}}
        animate={{y:0,opacity:1,transition:{
          duration:1,
        }}}
        exit={{y:-1000, opacity:0, transition:{
          duration:1
        }}}
        
        className="blackScreen">
            <motion.div
            initial={{y:-1000,opacity:0}}
            animate={{y:0,opacity:1,transition:{
              duration:1,
              delay:1,
              type:"spring"
            }}}
            
            
            className="modalboxC">
                <div className="poplogo">
                  <div><img src={Logo} alt='im' width={"70px"}></img></div>
                  <div><h6>Whack-A-Beast</h6> </div>
                  <div><img src={Logo2} width={"70px"} style={{transform:'rotateX(25px)'}} alt='im'></img></div> 
                  
                  
                  </div>
               <div><input id="name" type="text" placeholder="Name"></input></div>
               <div><button onClick={changeName}>Play</button></div>
                
            </motion.div>
            
            
        </motion.div>


}
</AnimatePresence>
            {
              countdownbool && 
              <div className="blackScreen">
            <div className="modalboxC">
                <div className="poplogo">
                  <div><img src={Logo}></img></div>
                  <div>
                    <h2>Whack-A-Beast</h2></div>
                    </div>
               <div><h3>Score: {score}</h3></div>
               <div><button onClick={()=>{
                setcountdownbool(false);
                settime(30);
                setScore(0)

               }}>Play Again</button></div>
                
            </div>
            
            
        </div>

            }
    </>
  )
}
