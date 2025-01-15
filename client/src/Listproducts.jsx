import React,{useState} from 'react'
import Update from './Update.jsx'

function Listproducts({products,handelDelete,changeview,getId}) {
  // console.log("products in list",products);
 
  
 

  return (
    <div>
{products.map((element,i)=>{
 const hundelAll=()=>{
   getId(element.id)
   return changeview("update")
 }
 return(
  <div className="card" style={{width: "30 rem"}}>
  <div key={element.id}>
    <img className="card-img-top" src={element.imageUrl} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Bloom & Essence</h5>
      <p className="card-text">An elegant choice for evening events, ideal for someone who exudes confidence and sophistication</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
<div>
<button onClick={()=>{handelDelete(element.id)}}>delete</button>
</div >
<button onClick={()=>(hundelAll())}>update</button>

</div>
 )
}
 )
 
 }



    </div>
  )
}

export default Listproducts
