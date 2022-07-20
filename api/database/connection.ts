import { Sequelize }  from'sequelize'
require('dotenv').config();

const DB_PASSWORD:any = process.env.DB_PASSWORD
const DB_USER:any = process.env.DB_USER
const DB_NAME:any= process.env.DB_NAME

const db = new Sequelize(DB_NAME , DB_USER, DB_PASSWORD,{
    host: 'localhost',
    dialect: 'postgres',
    native: false


});



export default db