import { DataTypes,   } from 'sequelize'
import db from '../database/connection';



const User:any  =  db.define('users',{

    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }

});

export default User;