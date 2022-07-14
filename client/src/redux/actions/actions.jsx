import axios from 'axios'
import authHeader from '../../services/auth-header'

export const GET_REGISTER = 'GET_REGISTER'

export const getRegister = (id) =>{
    return async function(dispatch){
        return axios.get(`http://localhost:8000/api/users/${id}`, { headers: authHeader() })
        .then(response=>{
            dispatch({type: GET_REGISTER, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}