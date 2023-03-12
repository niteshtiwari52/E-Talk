import axios from "axios";
import { CLEAR_USER, SELF, UPDATE_PROFILE } from "./user.type";

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

// updating user profile
export const updateUserProfile = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "PUT",
      url: `http://localhost:4000/api/user/updateprofile`,
      data: { ...userData },
    });
    return dispatch({ type: UPDATE_PROFILE, payload: User.data });
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
