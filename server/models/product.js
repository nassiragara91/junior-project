// module.exports=( connection, DataTypes )=>{
//     const Products = connection.define(
//         'Products',
//         {
//           // Model attributes are defined here
//           name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           imageUrl: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           price: {
//             type: DataTypes.INTEGER,
//             defaultdefaultValue:0
//           },
//           quantity: {
//             type: DataTypes.INTEGER,
//             defaultdefaultValue:0
//           },
         
//         },
//         {
//             timestamps: false,
//             promotion: {
//                 type: DataTypes.BOOLEAN,
//                 allowNull: true,
//                 defaultdefaultValue:false
//               },
//               verified: {
//                 type: DataTypes.BOOLEAN,
//                 allowNull: true,
//                 defaultdefaultValue:false
//               },
//               deliveryCost: {
//                 type: DataTypes.INTEGER,
//                 defaultdefaultValue:7
//               },
//               Available: {
//                 type: DataTypes.BOOLEAN,
//                 allowNull: true,
//                 defaultdefaultValue:true
//               },
//           // Other model options go here
//         },
//       );
//       return Products
//     }

const { connection, DataTypes } = require('sequelize');

module.exports=(connection, DataTypes)=>{
const Products = connection.define(
  'Products',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    options: {
      type: DataTypes.JSON, // Store options as a JSON object
      defaultValue: {
        promotion: false,
        verified: false,
        deliveryCost: 7,
        Available: true,
      },
    }
  
    // Other model options go here
  },
)
return Products
}