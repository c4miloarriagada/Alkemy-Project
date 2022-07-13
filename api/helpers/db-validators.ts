import User from '../models/user';



export const userExist = async( id = '') =>{

    const validateUser = await User.findByPk(id)
    if(!validateUser){
        throw new Error (`The id ${id} doesnt exists`)
    }


}