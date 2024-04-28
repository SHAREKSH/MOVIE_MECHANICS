import { useEffect ,useState,useCallback} from "react"
import "./Proj_currency.css"
export default function Currency(){
    let[checker,setchecker]=useState(true)
    let[num,setnum]=useState(0)
     let [response,setresponse]=useState(0)
     let[obj,setobj]=useState(null)
     let[arr,setarr]=useState([])
     let[from,setfrom]=useState("INR")
     let[to,setto]=useState("AED")
      
function fetcher(){
        console.log("inside")
        let base=from
        // note: enter the currency api from currency exchange rate api currenctly the requests are exhsausted
        let url=null 
        if(url===null) alert("please enter the api url( note : code is wriiten acc to exchange rate api so get  your url from there first   devloped by:shareksh)")
        fetch(url).then((response)=>{
            if(response.ok===true){
                setchecker(true)
                return response.json()
            }
            else{
                setchecker(false)
               setresponse(0)
               throw " response can't fetched"
           }
       }).then((d)=>{
            setobj(d)
             let r=Object.keys(d.conversion_rates)
             setarr(r)     
             console.log("fetched",d)     
     })
    .catch((e)=>{
        console.log(e)
     })
       }
  

    useEffect(()=>{
        fetcher()
    },[from,to])
    function amount(){
        
        let x=obj.conversion_rates[to]
        
        if(checker){
            setresponse(x*num)
        }
       
        
    }
    useEffect(()=>{
        if(obj!==null){
               console.log(" obj is not null")
                amount()
               }
        else{
                   console.log("obj is empty")
                   fetcher()
               }
     },[obj,from,to,num])
        
        






    return(<> 
    <div className="main">
         <h1>CURRENCY EXCHANGER</h1>
        <div className="amt">
            <input type="number" min={0}  max={100000000} value={num}  onChange={(e)=>{
                setnum(e.target.value)
            }}  placeholder="ENTER AMOUNT"/>
        </div>
        <div className="exc">
            <input list="fr" id="frs"  placeholder="ENTER THE CURRENCY" style={{textTransform:"uppercase"}} value={from}onChange={(d)=>setfrom(d.target.value.toUpperCase())}   />
             <datalist id="fr">
              { arr.map((elem,index)=> 
                         <option value={elem}
                         key={index}/>
                         
                )}
             </datalist>
             <button className="swap" onClick={()=>{
                console.log(from,to)
                let temp=from
                setfrom(to)
                setto(temp)    
                console.log(from,to)
             }}>SWAP</button>
             <input list="to" id="tos"  placeholder="ENTER THE CURRENCY" style={{textTransform:"uppercase"}} value={to} onChange={(d)=>setto(d.target.value.toUpperCase()) }  autoComplete="off" 
          />
             <datalist id="to">
              { arr.map((elem,index)=> 
                         <option value={elem}
                         key={index}/>
                )}
             </datalist>
            
        </div>
        <div className="gen">
                <b>AMOUNT IS:{response}</b> <br />
                <button onClick={amount} className="btn">calaculate </button>
            </div>
        

    </div>
</>

    )
}