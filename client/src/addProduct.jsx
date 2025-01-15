import React, { useState } from 'react'

function AddProduct({handelAdd,changeview}) {
    // console.log(handelAdd,"addddddd");
    const [name,setName]=useState("")
    const [imageUrl,setImage]=useState("")
    const [quantité,setquantities]=useState(0)
    const [price,setPrice]=useState(0)
    // console.log(name);
  return (
    <div >
        <h3> name</h3>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="email"  onChange={(e) => setName(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="the name of your product"/>
</div>
     <h3> imageUrl</h3>
     <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="email"  onChange={(e)=>{setImage(e.target.value)}}  className="form-control" id="exampleFormControlInput1" placeholder="the image of your product"/>
</div>
     
     <h3> quantity</h3>
     <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="email" onChange={(e)=>{setquantities(e.target.value)}}  className="form-control" id="exampleFormControlInput1" placeholder="the quantity of your product"/>
</div>
     
     <button onClick={()=>{handelAdd({name:name,imageUrl:imageUrl,quantity:quantité,price:price})
     changeview("home")}}>Add</button>



    </div>
    
  )
  
  
}

export default AddProduct
