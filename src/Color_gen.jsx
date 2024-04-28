import { useState } from "react";



export default function Color({col}){
    let[con,setcon]=useState(col)
     function change(){
         setcon(col)
         console.log(con)
         let body=document.body
         body.style.backgroundColor=con
    

     }
    return(
        <>
          
            <button onClick={change} className="btn">{col}</button>

         
          
        </>
    )
  
}