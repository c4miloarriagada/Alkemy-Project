import { GET_REGISTER,  EDIT_REGISTER, PUT_REGISTER, POST_REGISTER } from "../actions/actions";





const initialState = {
    finances : [],
    register: []
};

const rootReducer = (state = initialState, action) => {


   
    switch(action.type){
        case GET_REGISTER:
            return{
                ...state,
                finances: action.payload
            }
       case EDIT_REGISTER  :
        return{
            ...state,
            register: action.payload
        } 
       case PUT_REGISTER:
        return{
            ...state,
            register: action.payload
        } 
        case POST_REGISTER:
            return {
                ...state
            }
        
        default:
            return {...state}

    }

}


export default rootReducer;