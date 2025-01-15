const control=require('../controller/Admin')
const express=require('express')

const router=express.Router()

router.get("/getAll",control.getAll)
router.post("/add",control.Add)
router.delete("/delete/:id",control.Delete)
router.put("/update/:id",control.Update)
router.post("/register",control.register)
module.exports=router

