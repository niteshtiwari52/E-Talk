import axios from "axios";

// action type 

import {SIGN_IN, SIGN_UP, SIGN_OUT } from  "./auth.type"

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method : "POST",
            url : "http://localhost:4000/api/user/login/",
            data : {credential: userData},
        });
        console.log(User);

        localStorage.setItem("ETalkUser" , JSON.stringify({token : User.data.token}));

        return dispatch({type : SIGN_IN , payload : User.data});
        
    } catch (error) {
        return dispatch({type: "Error" , payload : error})
    }
}