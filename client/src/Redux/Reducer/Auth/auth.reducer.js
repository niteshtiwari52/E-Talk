// action Type 

import { SIGN_IN , SIGN_UP , SIGN_OUT } from "./auth.type"; 

const intialState = {};

const authReducer = (state = intialState, action ) => {
    switch (action.type) {
        case SIGN_IN:
            return{
                ...state,
                ...action.payload,
            };
        case SIGN_UP:
            return{
                ...state,
                ...action.payload,
            };

        case SIGN_OUT : 
            return{
                ...state,
            }
            
    
        default:
            return{
                ...state,
            };
    }
};

export default authReducer;