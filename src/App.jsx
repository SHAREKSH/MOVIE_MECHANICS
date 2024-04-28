import Appsub from "./Appsub.jsx"
function App() {
  let d=[
  
    { img:"red.jfif" ,
     
     title:"redmi note 10"
     ,price:"$100",

  },{
      img:"red.jfif",
     title:"redmi note 11"
     ,price:"$160",

  },{
     img:"red.jfif",
     
     title:"redmi note 12"
     ,price:"$200",

 }  
]
console.log("inside app")
  return (
    <> 
        {
            d.map((e)=>
                <Appsub
                img={e.img}
                title={e.title}
                price={e.price}
                />
       
                 
            )
        } 
    </>
  )
}

export default App
