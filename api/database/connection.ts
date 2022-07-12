import { Sequelize }  from'sequelize'





const db = new Sequelize('alkemy-project', 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres',
    //loggin: false


});


export default db