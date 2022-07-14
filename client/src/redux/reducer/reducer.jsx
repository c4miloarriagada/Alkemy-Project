import { GET_REGISTER } from "../actions/actions";





const initialState = {
    finances : []
};

const rootReducer = (state = initialState, action) => {


   
    switch(action.type){

        case GET_REGISTER:
            return{
                ...state,
                finances: action.payload
            }

        default:
            return {...state}

    }

}


export default rootReducer;