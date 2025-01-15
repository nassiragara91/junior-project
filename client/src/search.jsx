import React from 'react'

function search({products,searched}) {
    // console.log(products,"evry products");
    // console.log(searched,"wanted article");
   const filterr= products.filter((element)=>((element.name).toLowerCase().includes(searched))) 
    console.log("filter",filterr);
    
  return (
    <div>
      {filterr.map((element)=>(
<div key={element.id}>
<h1>{element.name}</h1>
<img style={{width:"100px"}} src={element.imageUrl} />
<p>{element.price}</p>

</div>
      ))
      
      }

    </div>
  )
}

export default search
