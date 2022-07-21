import { DataTypes } from 'sequelize'
import db from '../database/connection';



const Finance = db.define('finances',{

    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    type: {
        type: DataTypes.ENUM({
            values: ['sum' , 'sub']
        }),
       
    },
    total: {
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    date:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }

});

export default Finance; 