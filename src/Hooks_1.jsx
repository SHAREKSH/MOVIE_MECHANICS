import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from "react";
 export default function State(){
    let[counter,setcounter]=useState(1)
    function add(){
        if(counter<20){
            setcounter(counter+1)
        }
      }
        function remove(){
            if(counter>0){
                setcounter(counter-1)
            }
        }

    return(
        <>
        <h1 style={{color:"blue"}}>Rendering ui by hooks</h1><hr />
              <b>{counter}</b> <br /><br /><br />
        <button  style={{backgroundColor:"green",border:"3px solid red"}} onClick={add}>increase</button>
        <button style={{backgroundColor:"red",border:"3px solid green"}} onClick={remove}>decrease</button>
        
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <State/>
  </React.StrictMode>,
)

// readme===>
// hooks by chai and code -hitesh sir
// learned about the hooks in the react  it is basicallly the way by which react or we with react can control rendering of something  ex-counter variable here   in the use interface with very low line of codes   
// In vanilla js we have to get the element individually  by document.query/get ele   etc and than change its text content    but here we are chnaging each occurance of it in the entire dom tree
// date-5/03/24-tuesday-11.06 pm
// all the meta sites and app are down  /hahahhahah/