import "./app.css"


 export default function Appsub(props){
     const{img,title,price}={...props}
     console.log(props)

    return(<>
       
        <div className="con">
          <div className="img"><img src={img} alt="can't" id='asd' /></div>
          <div>
           <h4>#{title}</h4>
            <label htmlFor="">
              #{price} <br/>
              <button>add to cart</button>
            </label>
          </div>
       </div></>
    )
}
