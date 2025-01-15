module.exports=( connection, DataTypes )=>{
    const Categories = connection.define(
        'Categories',
        {
          // Model attributes are defined here
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
        },
        {
            timestamps: false
          // Other model options go here
        },
      );
      return Categories
    }
