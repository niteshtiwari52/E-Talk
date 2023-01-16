import axios from "axios";
import { FETCH_CHATS, FETCH_USER, FETCH_USER_CLEAR } from "./chat.type";

// fetching all the chats for a particaular user
export const fetchChats = () => async (dispatch) => {
  try {
    const chats = await axios({
      method: "GET",
      url: "http://localhost:4000/api/chat",
    });
    // console.log(chats.data);

    return dispatch({ type: FETCH_CHATS, payload: chats.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// fetching user for creating new one to one chat and group chat
export const fetchUser = (Search) => async (dispatch) => {
  try {
    const newUser = await axios({
      method: "GET",
      url: `http://localhost:4000/api/user?search=${Search}`,
    });

    // console.log(...newUser.data);

    return dispatch({ type: FETCH_USER, payload: newUser.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// clear the fetching user
export const fetchUserClear = () => async (dispatch) => {
  try {
    return dispatch({ type: FETCH_USER_CLEAR, payload: "" });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// creating new one to one chat
export const createChat = (userId) => async (dispatch) => {
  try {
    const newCreatedChat = await axios({
      method: "POST",
      url: "http://localhost:4000/api/chat",
      data: { userId },
    });
    return dispatch({ type: "CREATE_CHAT", payload: newCreatedChat.data });
    // axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// creating new group chat
export const createGroupChat = (groupInfo) => async (dispatch) => {
  try {
    // console.log({ ...groupInfo });

    const newCreatedGroupChat = await axios({
      method: "POST",
      url: "http://localhost:4000/api/chat/group",
      data: { ...groupInfo },
    });

    return dispatch({
      type: "CREAT_GROUP_CHAT",
      payload: newCreatedGroupChat.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
