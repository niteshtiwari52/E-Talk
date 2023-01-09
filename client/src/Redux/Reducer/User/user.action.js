
import axios from "axios";
import { CLEAR_USER, SELF } from "./user.type";

export const getMySelf = () => async (dispatch) => {
    try {
      const User = await axios({
        method: "GET",
        url: `http://localhost:4000/api/user/getmyself`,
      });
  
     
  
      return dispatch({ type: SELF, payload: { ...User.data.user } });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  

  export const clearUser = () => async (dispatch) => {
    try {
      return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };