import { Sequelize }  from'sequelize'
import User from '../models/user';
import Finance from '../models/finance';


User.belongsToMany(Finance, {through: 'User_finances'});
Finance.belongsTo(User);




const db = new Sequelize('alkemy-project', 'postgres', '1234',{
    host: 'localhost',
    dialect: 'postgres',
    //loggin: false


});


export default db