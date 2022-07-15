import axios from 'axios';



const signup = (email, password)=>{
    return axios
        .post("http://localhost:8000/api/login/",{
            email, password
        })
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        return response.data
        })
}



const register = (data)=>{
    console.log(data)
    return axios
        .post("http://localhost:8000/api/users/",{
           data
        })
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        return response.data
        })
}

const logout = ()=>{
    localStorage.removeItem('user')
}

const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem('user'))
}



const authService = {
    register,
    signup,
    logout,
    getCurrentUser
}


export default authService