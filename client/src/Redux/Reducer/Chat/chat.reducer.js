import { fetchUser } from "./chat.action";
import {
  CLEAR_SELECT_CHAT,
  CREATE_CHAT,
  CREATE_GROUP_CHAT,
  FETCH_CHATS,
  FETCH_USER,
  FETCH_USER_CLEAR,
  SELECT_CHAT,
} from "./chat.type";
const initialState = {
  chats: [],
  newUser: [],
  createdChat: {},
  createdGroupChat: {},
  selectedChat: {},
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

    case SELECT_CHAT:
      return {
        ...state,
        selectedChat: action.payload,
      };
    case CLEAR_SELECT_CHAT:
      return {
        ...state,
        selectedChat: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;
