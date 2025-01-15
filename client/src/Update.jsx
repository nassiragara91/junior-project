import React,{useState} from 'react'

function Update({handelUpdate,changeview}) {
    // console.log("handel update",handelUpdate);
    // console.log("ellement update",element);
    
 const [name,setName]=useState("")
     const [imageUrl,setImage]=useState("")
     const [quantité,setquantities]=useState(0)
     const [price,setPrice]=useState(0)
     const [idd,setid]=useState(null)
    //  console.log(name);
   return (
     <div >
         <h3> name</h3>
      <input onChange={(e)=>{setName(e.target.value)}}></input>
      <h3> imageUrl</h3>
      <input onChange={(e)=>{setImage(e.target.value)}}></input>
      <h3> quantity</h3>
      <input onChange={(e)=>{setquantities(e.target.value)}}></input>
      <h3> Price</h3>
      <input onChange={(e)=>{setPrice(e.target.value)}}></input>
      <div>
      <button onClick={()=>{handelUpdate({name:name,imageUrl:imageUrl,quantity:quantité,price:price})
      changeview("home")}}>update</button>
 </div>
 
 
     </div>
     
   )
   
}

export default Update

