import { DataTypes } from 'sequelize'
import db from '../database/connection';



const Finance = db.define('finances',{

    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    type: {
        type: DataTypes.ENUM({
            values: ['sum' , 'rest']
        }),
       
    },
    total: {
        type: DataTypes.NUMBER
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    }

});

export default Finance;