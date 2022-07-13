import User from './user';
import Finance from './finance';



User.hasMany(Finance,{foreignKey:'financeId'})
Finance.belongsTo(User, {foreignKey: 'financeId'})



