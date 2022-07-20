import { Sequelize }  from'sequelize'




const db = new Sequelize('alkemy-project' , 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres',
    native: false


});



export default db