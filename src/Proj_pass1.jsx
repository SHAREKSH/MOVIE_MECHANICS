import { useState ,useCallback,useEffect} from "react"
import "./Proj_pass.css"

 export default function Pass1(){
    let[count,setcount]=useState("")
    let[length,setlength]=useState(8)
    let[numbers,setnumbers]=useState(false)
    let[symb,setsymb]=useState(false)
    let[reg,setreg]=useState(false)
    
    const password_genrator= useCallback(()=>{
       
        let symbols="!@#$%^&*"
        let num="1234567890"
        let string="qwertyuioplkmjnhbvgfcxdszaZAQXSWCDEVFRTGBNHYUJMKIOLP"
        if(numbers){
            string=string+num
        }

        if(symb){
            string=string+symbols
        }

        let password=""
        for(let i=0;i<length;i++){
            let index=Math.round(Math.random()*string.length)+1
            password=password+ string.charAt(index)
        }
        setcount(password)
    },[length,symb,numbers])


    useEffect(()=>{
        password_genrator()
    },[length,symb,numbers,reg])
  
    function copy(){
        navigator.clipboard.writeText(count)
      
        let x=document.querySelector(".text")
        x.select()
    }
    

    return(

        <>
           <div className="con">
            <h1>PASSWORD GENRATOR</h1>
            <div className="con2">
            <div className="d1">
            <input type="text" className="text" value={count}/>
            <button className="cbtn"  onClick={copy}>COPY</button>
            </div>
           <div className="d2">
           <input type="range"   id="selector" className="range" min={1} max={20}   step={1}  value={length} onChange={(e)=>setlength(e.target.value)}/>

            <label htmlFor="selector">LENGTH:{length}</label>
           </div>
           <div className="d3"> 
           <input type="checkbox"  id="num"  onChange={()=>setnumbers((prev)=>!prev)}/>
            <label htmlFor="num">NUMBERS</label>
            </div>
           <div className="d4">
           <input type="checkbox"  id="symb"  onChange={()=>setsymb((prev)=>!prev)}/>
            <label htmlFor="symb">CHARACTERS</label>
           </div>
            <div className="d5">
            <button className="rbtn" onClick={()=>setreg((prev)=>!prev)}>REGENRATE</button>
            </div>
            </div>
           </div>

        </>
    )
}