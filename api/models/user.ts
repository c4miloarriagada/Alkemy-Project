import { DataTypes } from 'sequelize'
import db from '../database/connection';



const User = db.define('users',{

    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }

});

export default User;