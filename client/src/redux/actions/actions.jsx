import axios from 'axios'
import authHeader from '../../services/auth-header'

export const GET_REGISTER = 'GET_REGISTER'
export const DELETE_REGISTER = 'DELETE_REGISTER'
export const EDIT_REGISTER = 'EDIT_REGISTER'



export const getRegister = (id) =>{
    return async function(dispatch){
        return axios.get(`http://localhost:8000/api/finance/${id}`, { headers: authHeader() })    
        .then(response=>{
            dispatch({type: GET_REGISTER, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}


export const deleteRegister = (id) => {
    return async function(dispatch){
        return axios.delete(`http://localhost:8000/api/finance/${id}`, { headers: authHeader() })
        .then(response => {
            dispatch({type: DELETE_REGISTER})
        })
        .catch(err => console.log(err))
    }

}


export const editRegister = (id) => {
    return async function(dispatch){
        return axios.get(`http://localhost:8000/api/finance/edit/${id}`, { headers: authHeader() })
        .then(response =>{
            dispatch({type: EDIT_REGISTER, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}
