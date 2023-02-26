import axios from "axios";

// action type

import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  USER_VERIFICATION,
  VERIFY_TOKEN,
} from "./auth.type";

// Sign IN

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/api/user/login/",
      data: { ...userData },
    });

    localStorage.setItem(
      "ETalkUser",
      JSON.stringify({ token: User.data.token })
    );
    window.location.reload();
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${User.data.token}`;

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "Error", payload: error });
  }
};

// Sign UP

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/api/user",
      data: { ...userData },
    });

    localStorage.setItem(
      "ETalkUser",
      JSON.stringify({ token: User.data.token })
    );
    window.location.reload();

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${User.data.token}`;

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// user VErication

export const userVerification = (data) => async (dispatch) => {
  try {
    console.log(data.email);
    const verificationLink = await axios({
      method: "POST",
      url: "http://localhost:4000/api/user/resend/verificationlink",
      data: { ...data },
    });

    return dispatch({
      type: USER_VERIFICATION,
      payload: verificationLink.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// verify email link
export const verifyEmailLink = (token) => async (dispatch) => {
  try {
    const verificationStatus = await axios({
      method: "PUT",
      url: `http://localhost:4000/api/user/verify`,
      data: { token },
    });
    return dispatch({ type: VERIFY_TOKEN, payload: verificationStatus.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error.response.data });
  }
};

//   SIGN out

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("ETalkUser");

    window.location.reload();

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
