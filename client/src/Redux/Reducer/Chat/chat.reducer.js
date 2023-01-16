import { fetchUser } from "./chat.action";
import {
  CREATE_CHAT,
  CREATE_GROUP_CHAT,
  FETCH_CHATS,
  FETCH_USER,
  FETCH_USER_CLEAR,
} from "./chat.type";
const initialState = {
  chats: [],
  newUser: [],
  createdChat: {},
  createdGroupChat: {},
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS:
      return {
        ...state,
        chats: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        newUser: action.payload,
      };

    case FETCH_USER_CLEAR:
      return {
        ...state,
        newUser: [],
      };

    case CREATE_CHAT:
      return {
        ...state,
        createdChat: action.payload,
      };

    case CREATE_GROUP_CHAT:
      return {
        ...state,
        createdGroupChat: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;
