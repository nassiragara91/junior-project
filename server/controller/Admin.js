const {Categories,Products,Admin} =require('../models/index')
const bcrypt=require("bcrypt")

module.exports={
getAll:async(req,res)=>{
    try {
        const fetch=await Admin.findAll()
        res.status(200).send(fetch)
    } catch (error) {
        console.log("error",error);
        
    }

},
Add:async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const fetch=await Admin.create({name,email,password})
        res.status(201).send(fetch)
    } catch (error) {
        console.log("error",error);
        
    }
},
Delete:async(req,res)=>{
    const {id}=req.params
    try {
        const fetch=await Admin.destroy({where:{id}})
        res.status(200).send("deleted sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},
Update:async(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    try {
        const updated=await Admin.update({name},{where:{id}})
        res.status(200).send("Updated sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},
register:async(req,resp)=>{
    try{
const {name,email,password}=req.body
const check=await Admin.findOne({where:{email}})
if (check) {
  return  resp.status(404).send("email existed")
}
const hachPassword=await bcrypt.hash(password,15)
 const newAdmin=await Admin.create({name:name,email:email,password:hachPassword})
 return resp.status(201).send("registred suceessfully")
    }
    catch{(error)=>{throw error}}

}




}


