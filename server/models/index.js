const { Sequelize, DataTypes }=require("sequelize")

const connection = new Sequelize('e-commerce', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql' })
// connection with sequelize
    connection.authenticate()
    .then(()=>{console.log("connected sucess to Sequelize")})
    .catch((error)=>console.log("error",error))

    // import model

const Categories =require('./categorie')(connection, DataTypes)
const Products =require('./product')(connection, DataTypes)
const Admin =require('./admin')(connection, DataTypes)

// establishing relations

Admin.hasMany(Products)
Products.belongsTo(Admin)

Categories.hasMany(Products)
Products.belongsTo(Categories)

// Creating Tables and synchronise

// connection.sync({force:true})
// .then(()=>console.log("Tables Created "))
// .catch((err)=>console.log("error ",err))

module.exports={Admin,Categories,Products}
