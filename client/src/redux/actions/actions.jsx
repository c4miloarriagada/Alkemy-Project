import axios from 'axios'
import authHeader from '../../services/auth-header'

export const GET_REGISTER = 'GET_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';
export const EDIT_REGISTER = 'EDIT_REGISTER';
export const PUT_REGISTER = 'PUT_REGISTER';
export const POST_REGISTER = 'POST_REGISTER';



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


export const putRegister = (id, data) => {
    return async function(dispatch){
        return axios.put(`http://localhost:8000/api/finance/${id}`,data, { headers: authHeader() })
        .then(response =>{
            dispatch({type: PUT_REGISTER, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}

export const postRegister = (data) =>{
    return async function(dispatch){
        return axios.post(`http://localhost:8000/api/finance/`, data, { headers: authHeader() })
        .then(response => {
            dispatch({type: POST_REGISTER, payload: response.data})
        })
        .catch(err => console.log(err))
    }
}