import Color  from "./Color_gen";

import "./colgenstyle.css"




 export default function Col2(){
    let colorlist=["red","green","yellow","orange","purple"]
    
     return(
        <>
   
       {
        colorlist.map((item)=>
              <Color  key={item+"1"}col={item}/>         )
       }
     </>
     )
} 